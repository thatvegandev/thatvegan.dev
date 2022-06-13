import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import React from 'react'

import { gql } from 'graphql-request'
import { Users as UsersIcon } from 'tabler-icons-react'

import { RepoCard } from '~/components'
import { client } from '~/lib/graphql-client'

const GetPinnedRepos = gql`
  {
    user(login: "thatvegandev") {
      login
      avatarUrl
      name
      followers {
        totalCount
      }
      following {
        totalCount
      }
      pinnedItems(first: 6) {
        nodes {
          ... on Repository {
            id
            name
            stargazerCount
            description
            primaryLanguage {
              name
              color
            }
            latestRelease {
              name
            }
            openGraphImageUrl
            usesCustomOpenGraphImage
          }
        }
      }
    }
  }
`

export const loader: LoaderFunction = async ({ request }) => {
  const data = await client.request(GetPinnedRepos)
  return json(data)
}

export default function Dashboard() {
  const data = useLoaderData()
  const user = data?.user

  return (
    <main className="w-full max-w-6xl mx-auto p-6">
      {user && (
        <>
          <div className="flex flex-col items-center">
            <img src={user.avatarUrl} alt={user.name} className="h-36 w-36 rounded-lg" />

            <div className="my-4 flex flex-col items-center">
              <h1 className="text-2xl font-bold">{user?.name}</h1>
              <h1 className="font-semibold text-zinc-400">@{user?.login}</h1>
            </div>
            <div>
              <UsersIcon size={14} className="mr-1 inline" />
              <span className="font-bold mr-1">{user?.followers.totalCount}</span> followers
              <span className="mx-2">·</span>
              <span className="font-bold mr-1">{user?.following.totalCount}</span> following
            </div>
            <div className="mt-3">
              <p>{user?.bio}</p>
            </div>
          </div>
          <div>
            <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
              {user?.pinnedItems?.nodes?.map((repo: any) => (
                <RepoCard repo={repo} key={repo.id} />
              ))}
            </div>
          </div>
        </>
      )}
    </main>
  )
}

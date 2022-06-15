import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { RepoCard } from '~/components'
import { gh_gql_client } from '~/lib/graphql/client'
import { GetUserFromGithub } from '~/lib/graphql/queries'

export const loader: LoaderFunction = async () => {
  const data = await gh_gql_client.request(GetUserFromGithub, { login: 'thatvegandev' })
  return json(data)
}

export default function IndexPage() {
  const data = useLoaderData()
  const user = data.user

  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="mr-3 rounded-lg h-14 w-14 sm:h-16 sm:w-16"
          />
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-bold sm:text-2xl">{user.name}</h1>
            <a
              href="https://github.com/thatvegandev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold rounded-md sm:text-base text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-400"
            >
              @<span className="hover:underline">{user.login}</span>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 sm:mt-8">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {user.pinnedItems.nodes
            .filter((repo: any) => !['dotfiles'].includes(repo.name))
            .map((repo: any) => (
              <RepoCard repo={repo} key={repo.id} />
            ))}
        </div>
      </div>
    </div>
  )
}

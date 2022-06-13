import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { gql } from 'graphql-request'
import {
  BrandGithub,
  BrandInstagram,
  BrandLinkedin,
  BrandTwitter,
  BrandYoutube,
  Users as UsersIcon,
} from 'tabler-icons-react'

import { RepoCard } from '~/components'
import { client } from '~/lib/graphql-client'

const socialLinks = [
  {
    url: 'https://github.com/thatvegandev',
    icon: BrandGithub,
  },
  {
    url: 'https://twitter.com/thatvegandev',
    icon: BrandTwitter,
  },
  {
    url: 'https://instagram.com/thatvegandev',
    icon: BrandInstagram,
  },
  {
    url: 'https://www.youtube.com/c/thatvegandev',
    icon: BrandYoutube,
  },
  {
    url: 'https://linkedin.com/in/thatvegandev',
    icon: BrandLinkedin,
  },
]
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
            url
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

export default function IndexPage() {
  const data = useLoaderData()
  const user = data.user

  return (
    <main className="w-full mx-auto max-w-[90vw] sm:max-w-[80vw] flex flex-col justify-between items-center p-4 sm:p-6 min-h-screen">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <img src={user.avatarUrl} alt={user.name} className="rounded-lg h-36 w-36" />

          <div className="flex flex-col items-center my-4">
            <h1 className="text-2xl font-bold sm:text-3xl">{user.name}</h1>
            <a
              href="https://github.com/thatvegandev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold rounded-md sm:text-lg text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-400"
            >
              @<span className="hover:underline">{user.login}</span>
            </a>
          </div>
          <div className="text-sm sm:text-lg">
            <UsersIcon className="inline w-4 h-4 mr-2 sm:h-5 sm:w-5" />
            <span className="mr-1 font-bold">{user.followers.totalCount}</span> followers
            <span className="mx-1 sm:mx-2">·</span>
            <span className="mr-1 font-bold">{user.following.totalCount}</span> following
          </div>
          <div className="mt-3">
            <p>{user.bio}</p>
          </div>
        </div>
        <div>
          <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
            {user.pinnedItems.nodes.map((repo: any) => (
              <RepoCard repo={repo} key={repo.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-12 mb-2 space-x-6">
        {socialLinks.map((link) => (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            key={link.url}
            className="rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400"
          >
            <link.icon
              size={28}
              className="text-zinc-400 hover:text-zinc-300 cursor-pointer transition-all duration-150 hover:-translate-y-[2px]"
            />
          </a>
        ))}
      </div>
    </main>
  )
}

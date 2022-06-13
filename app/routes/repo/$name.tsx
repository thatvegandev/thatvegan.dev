import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { marked } from 'marked'

import { gql } from 'graphql-request'
import { BrandGithub } from 'tabler-icons-react'
import invariant from 'tiny-invariant'

import { client } from '~/lib/graphql-client'

const GetDetailedRepo = gql`
  query GetDetailedRepo($name: String!) {
    repository(owner: "thatvegandev", name: $name) {
      id
      name
      object(expression: "HEAD:README.md") {
        ... on Blob {
          id
          text
        }
      }
    }
  }
`

export const loader: LoaderFunction = async ({ request, params }) => {
  invariant(params.name)
  const data = await client.request(GetDetailedRepo, {
    name: params.name,
  })
  return json(data)
}

export default function RepoPage() {
  const data = useLoaderData()
  const repo = data.repository
  return (
    <main className="flex flex-col justify-start items-center p-4 sm:p-6 min-h-screen max-w-[90vw] sm:max-w-2xl mx-auto w-full">
      <div className="flex justify-between w-full mb-4">
        <Link
          to="/"
          className="px-3 py-2 text-sm font-semibold text-white bg-transparent border transition-colors duration-150 ease-in-out rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-violet-400"
        >
          ← Back
        </Link>

        <a
          href={`https://github.com/thatvegandev/${repo.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-3 py-2 text-sm font-semibold text-white bg-black transition-colors duration-150 ease-in-out rounded-md hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-violet-400"
        >
          <BrandGithub size={16} className="mr-2" strokeWidth={3} />
          Open in GitHub
        </a>
      </div>

      <article
        className="w-full prose prose-invert prose-a:inline-flex prose-img:m-0"
        dangerouslySetInnerHTML={{
          __html: marked(repo.object.text),
        }}
      />
    </main>
  )
}

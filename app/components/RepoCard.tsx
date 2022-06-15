import { Link } from '@remix-run/react'

import { CLOUDFRONT_URL } from '~/lib/constants'

type Props = {
  repo: any
}

export const RepoCard = ({ repo }: Props) => (
  <Link
    to={`/repo/${repo.name}`}
    className="overflow-hidden rounded-lg bg-zinc-900 hover:bg-[#1a1a1e] transition-colors duration-150 ease-in-out shadow p-5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-400"
  >
    <div className="mb-2 text-lg font-semibold text-white truncate sm:text-xl">{repo.name}</div>
    <div className="mt-1 text-xs font-medium text-zinc-400 line-clamp-1 sm:text-sm">
      {repo.description}
    </div>
    <video
      autoPlay
      loop
      muted // wont autoplay unless muted (even though no sound)
      className="object-cover my-4 rounded-md aspect-video"
      src={`${CLOUDFRONT_URL}/projects/${repo.name}/demo.mp4`}
    />

    <div className="flex mt-1 text-xs font-medium sm:text-sm text-zinc-400">
      <div className="flex items-center">
        <div
          style={{
            background: repo.primaryLanguage.color,
          }}
          className="w-3 h-3 mr-2 rounded-full"
        />
        <div className="mr-6 sm:mr-8">{repo.primaryLanguage.name}</div>
      </div>
      <div className="mr-8">
        <span className="mr-2">⭐️</span>
        {repo.stargazerCount}
      </div>
    </div>
  </Link>
)

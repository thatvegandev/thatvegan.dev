import { Link } from '@remix-run/react'

type Props = {
  repo: any
}

export const RepoCard = ({ repo }: Props) => (
  <Link
    to={`/repo/${repo.name}`}
    className="overflow-hidden rounded-lg bg-zinc-900 hover:bg-[#1d1d20] transition-colors duration-150 ease-in-out shadow p-5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-400"
  >
    <div className="mb-2 text-lg font-semibold text-white truncate sm:text-2xl">{repo.name}</div>
    <div className="mt-1 mb-3 text-sm font-medium text-zinc-400 line-clamp-1 sm:text-base">
      {repo.description}
    </div>
    <img
      className="w-full my-6 rounded-md aspect-video"
      src={`https://github.com/thatvegandev/assets/raw/main/${repo.name}/demo.gif`}
      alt={`${repo.name} demo`}
    />

    <div className="flex mt-1 text-sm font-medium sm:text-base text-zinc-400">
      <div className="flex items-center">
        <div
          style={{
            background: repo.primaryLanguage.color,
          }}
          className="w-3 h-3 mr-2 rounded-full sm:h-4 sm:w-4"
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

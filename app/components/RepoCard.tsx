type Props = {
  repo: any
}

export const RepoCard = ({ repo }: Props) => {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="overflow-hidden rounded-lg bg-zinc-900 border-3 border-zinc-900 hover:border-zinc-800 shadow p-4 cursor-pointer"
    >
      <div className="truncate font-semibold text-white text-lg sm:text-2xl mb-2">{repo.name}</div>
      <div className="mt-1 font-medium text-zinc-400 line-clamp-1 mb-3 text-sm sm:text-base">
        {repo.description}
      </div>
      <div className="mt-1 flex text-sm sm:text-base font-medium text-zinc-400">
        <div className="flex items-center">
          <div
            style={{
              background: repo.primaryLanguage.color,
            }}
            className="mr-2 h-3 w-3 sm:h-4 sm:w-4 rounded-full"
          />
          <div className="mr-6 sm:mr-8">{repo.primaryLanguage.name}</div>
        </div>
        <div className="mr-8">
          <span className="mr-2">⭐️</span>
          {repo.stargazerCount}
        </div>
      </div>
    </a>
  )
}

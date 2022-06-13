type Props = {
  repo: any
}

export const RepoCard = ({ repo }: Props) => {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="overflow-hidden rounded-lg bg-zinc-900 border-3 border-zinc-900 hover:border-zinc-800 shadow p-4"
    >
      <div className="truncate font-semibold text-white">{repo.name}</div>
      <div className="mt-1 text-sm font-medium text-zinc-400 line-clamp-1 mb-3">
        {repo.description}
      </div>
      <div className="mt-1 flex text-sm font-medium text-zinc-400">
        <div className="flex items-center">
          <div
            style={{
              background: repo.primaryLanguage.color,
            }}
            className={`mr-2 h-3 w-3 rounded-full`}
          />
          <div className="mr-8">{repo.primaryLanguage.name}</div>
        </div>
        <div className="mr-8">
          <span className="mr-2">⭐️</span>
          {repo.stargazerCount}
        </div>
      </div>
    </a>
  )
}

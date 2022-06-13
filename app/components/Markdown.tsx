import { marked } from 'marked'

type Props = {
  md: string
}
export const Markdown = ({ md }: Props) => (
  <article
    className="w-full max-w-4xl text-sm prose prose-invert prose-a:inline-flex prose-img:m-0 sm:text-base"
    dangerouslySetInnerHTML={{
      __html: marked(md),
    }}
  />
)

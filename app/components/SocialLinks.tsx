import {
  BrandGithub as GithubIcon,
  BrandInstagram as InstagramIcon,
  BrandLinkedin as LinkedinIcon,
  BrandTwitter as TwitterIcon,
  BrandYoutube as YoutubeIcon,
} from 'tabler-icons-react'

const socialLinks = [
  {
    url: 'https://github.com/thatvegandev',
    label: 'github',
    Icon: GithubIcon,
  },
  {
    url: 'https://twitter.com/thatvegandev',
    label: 'twitter',
    Icon: TwitterIcon,
  },
  {
    url: 'https://instagram.com/thatvegandev',
    label: 'instagram',
    Icon: InstagramIcon,
  },
  {
    url: 'https://www.youtube.com/c/thatvegandev',
    label: 'youtube',
    Icon: YoutubeIcon,
  },
  {
    url: 'https://linkedin.com/in/thatvegandev',
    label: 'linkedin',
    Icon: LinkedinIcon,
  },
]
export const SocialLinks = () => (
  <div className="flex justify-center space-x-6">
    {socialLinks.map(({ url, label, Icon }) => (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        key={url}
        aria-label={`follow me on ${label}`}
        className="rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400"
      >
        <Icon size={28} className="cursor-pointer text-zinc-500" />
      </a>
    ))}
  </div>
)

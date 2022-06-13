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
    Icon: GithubIcon,
  },
  {
    url: 'https://twitter.com/thatvegandev',
    Icon: TwitterIcon,
  },
  {
    url: 'https://instagram.com/thatvegandev',
    Icon: InstagramIcon,
  },
  {
    url: 'https://www.youtube.com/c/thatvegandev',
    Icon: YoutubeIcon,
  },
  {
    url: 'https://linkedin.com/in/thatvegandev',
    Icon: LinkedinIcon,
  },
]
export const SocialLinks = () => (
  <div className="flex justify-center space-x-6">
    {socialLinks.map(({ url, Icon }) => (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        key={url}
        className="rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400"
      >
        <Icon
          size={28}
          className="text-zinc-400 hover:text-zinc-300 cursor-pointer transition-all duration-150 hover:-translate-y-[2px]"
        />
      </a>
    ))}
  </div>
)

import type { MetaFunction } from '@remix-run/node'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'

import { SocialLinks } from '~/components'
import styles from '~/styles/build.css'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'thatvegan.dev',
  description: 'the internet nook of colby thomas',
  viewport: 'width=device-width,initial-scale=1',
})

export function links() {
  return [
    { rel: 'stylesheet', href: styles },
    {
      rel: 'icon',
      href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌱</text></svg>',
    },
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-[#111111] text-zinc-100">
        <main className="flex flex-col justify-between min-h-screen p-4 mx-auto sm:p-6 max-w-7xl">
          <Outlet />
          <footer className="mt-8">
            <SocialLinks />
          </footer>
        </main>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

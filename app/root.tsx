import type { MetaFunction } from '@remix-run/node'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'

import styles from './styles/build.css'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'thatvegan.dev',
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
      <body className="bg-[#121212] text-zinc-100">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

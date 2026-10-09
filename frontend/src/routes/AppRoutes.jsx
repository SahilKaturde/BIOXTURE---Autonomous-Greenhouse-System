
import { createBrowserRouter, Link } from 'react-router'

import Landing_Page from '../pages/Landing_Page'
import Home_Page from '../pages/Home_Page'

function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center
      gap-4 bg-[#f5f7f2] text-[#26372b]">
      <h1 className="text-4xl font-semibold">404</h1>

      <p className="text-sm text-gray-500">
        This page doesn't exist.
      </p>

      <Link
        to="/"
        className="rounded-full bg-[#203729] px-5 py-3
          text-sm text-white transition hover:bg-[#304d38]"
      >
        Back to BIOXTURE
      </Link>
    </main>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Landing_Page,
  },
  {
    path: '/home',
    Component: Home_Page,
  },
  {
    path: '*',
    Component: NotFoundPage,
  },
])

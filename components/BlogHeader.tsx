import { PortableText } from '@portabletext/react'
import Link from 'next/link'

import styles from './BlogHeader.module.css'

export default function BlogHeader({
  title,
  description,
  level,
}: {
  title: string
  description?: any[]
  level: 1 | 2
}) {
  switch (level) {
    case 1:
      return (
        <header className="bg-black text-accent-2 p-4 flex justify-between items-center w-full">
          <h1 className="text-6xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
            {title}
          </h1>
          <h4
            className={`mt-5 text-center text-lg md:pl-8 md:text-left ${styles.portableText}`}
          >
            <PortableText value={description} />
          </h4>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/about" legacyBehavior>
                  <a className="text-accent-2 hover:underline">About</a>
                </Link>
              </li>
              <li>
                <Link href="/posts" legacyBehavior>
                  <a className="text-accent-1 hover:underline">Posts</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" legacyBehavior>
                  <a className="text-accent-1 hover:underline">Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      )

    case 2:
      return (
        <header className="bg-black text-white p-4 flex justify-between items-center w-full">
          <h1 className="text-accent-2 text-2xl font-bold">
            <Link href="/" legacyBehavior>
              <a>My Blog</a>
            </Link>
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/about" legacyBehavior>
                  <a className="text-accent-1 hover:underline">About</a>
                </Link>
              </li>
              <li>
                <Link href="/posts" legacyBehavior>
                  <a className="text-accent-1 hover:underline">Posts</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" legacyBehavior>
                  <a className="text-accent-1 hover:underline">Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      )

    default:
      throw new Error(
        `Invalid level: ${
          JSON.stringify(level) || typeof level
        }, only 1 or 2 are allowed`,
      )
  }
}
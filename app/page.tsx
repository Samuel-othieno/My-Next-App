import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
     <h1> Hello, welcome to my next App </h1>
     <Link href="/about">About</Link>
    </main>
  )
}

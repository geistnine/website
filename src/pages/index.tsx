import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useRef } from 'react'
import Intro from './intro'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Geiger.dev</title>
        <meta name="description" content="Steven Geiger's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Intro></Intro>
      </main>
    </>
  )
}

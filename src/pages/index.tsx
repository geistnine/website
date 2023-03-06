import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'
import Intro from './intro';
import Main from './main';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [introMode, setIntroMode]  = useState(true);
  useEffect(() => {
    if (introMode) {
      setTimeout(() => {
        setIntroMode(false);
        console.log(introMode)
      }, 5500)

    }
  }, [introMode])
  return (
    <>
      <Head>
        <title>Geiger.dev</title>
        <meta name="description" content="Steven Geiger's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        { introMode ? <Intro></Intro> : <Main></Main> }
      </main>
    </>
  )
}

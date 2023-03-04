import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useRef } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const typing = () => {
    const pElement: Element = document.querySelector("#hi") as Element;
    const text: string = "Hello, I'm Steven.";
    let i: number = 0;
    
    (function addChar(){
      pElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(addChar, 100);
    })()
  }
  const ranTyping = useRef(false);
  useEffect(() => {
    if (ranTyping.current){
      return;
    }
    typing()
    ranTyping.current = true;
  })
  return (
    <>
      <Head>
        <title>Geiger.dev</title>
        <meta name="description" content="Steven Geiger's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <p id="hi"></p>
        </div>
      </main>
    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useRef } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  function typing() {
    const pElement: Element = document.querySelector("#hi") as Element;
    const nameText: string = "Hello, I'm Steven.";
    let i: number = 0;
    
    function addChar(){
      pElement.innerHTML += nameText.charAt(i);
      i++;
      setTimeout(addChar, 100);
    }
    addChar();

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const titleText: string = "Software Engineer";

    function hackedTyping() {
      let iterations: number = -1;
      const interval = setInterval(() => {
        pElement.innerHTML = titleText.split("")
        .map((letter, index) => {
          
          if (index < iterations) return letter;
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
        iterations += 1;
      }, 40)
      if (iterations > titleText.length) clearInterval(interval);
    }
    setTimeout(hackedTyping, 3000)

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

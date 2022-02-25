import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import GetAccount from "./web3";

const galerie = require("../public/galerie.png");



const Home: NextPage = () => {


  return (
      <div>
          <GetAccount/>
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Galerie By Garage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
       <Image src={galerie}/>
          <div className="grid grid-cols-3 gap-5 mt-10">
              <div><p> Enter to the <Link href="/Marketplace"><a className="text-blue-600">Marketplace</a></Link></p></div>
              <div><p> Enter to the <Link href="/mineNFT"><a className="text-blue-600">Your possesion</a></Link></p></div>
              <div><p> Enter to the <Link href="/Mint"><a className="text-blue-600">Mint</a></Link> </p></div>
          </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
        >
          Powered by Blockchain Lab{' '}
          <Image src="/logo_BCLAB.png" alt="Vercel Logo" width={72} height={72} />
        </a>
      </footer>
    </div>
      </div>
  )
}

export default Home

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from 'next/font/google'
import Head from "next/head";

const montserrat = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Dynamic Pack JSON Generator</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={montserrat.className}>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

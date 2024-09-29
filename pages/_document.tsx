import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <title>Dynamic Pack JSON Generator</title>
        <link rel="icon" href="/logo.png" />
        <style>
          {`
            html {
            background-color: #0a0a0a;
            }
          `}
        </style>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

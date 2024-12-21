import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <body className="bg-background text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

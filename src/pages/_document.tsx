import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="/fonts/font-awesome-4.7.0/font-awesome.min.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="/fonts/iconic/css/material-design-iconic-font.min.css"
        />

        <link rel="stylesheet" type="text/css" href="/fonts/linearicons-v1.0.0/icon-font.min.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

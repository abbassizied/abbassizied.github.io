import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const meta = {
    title: "blog create by Abbassi Zied",
    description: "Clone and deploy your own Next.js-powered portfolio in minutes.",
    image: "public/images/csharp.png",
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Abbassi_Zied" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

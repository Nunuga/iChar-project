import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang={"ru"}>
      <Head>
        <link rel={"icon"} href={"/favicon.ico"} />

        <meta name={"robots"} content={"noindex, nofollow"} />
        <meta property={"og:title"} content={"I8U8"} />
        <meta property={"og:description"} content={""} />

        <meta property={"og:image:width"} content={"900"} />
        <meta property={"og:image:height"} content={"600"} />
        <meta property={"og:url"} content={"https://i8u8.ru"} />
        <meta property={"og:type"} content={"website"} />
        <meta property={"og:locale"} content={"ru_RU"} />
        <meta property={"og:site_name"} content={"I8U8"} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

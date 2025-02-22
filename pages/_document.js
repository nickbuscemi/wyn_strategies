import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href='https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Poiret+One&display=swap' rel="stylesheet" />
          <link rel="icon" type="image/x-icon" href="/favicon.png"></link>

          {/* Open Graph Meta Tags */}
          <meta property="og:title" content="Wyn - Strategies & Marketing Solutions" />
          <meta property="og:description" content="Expert marketing solutions tailored to your practice." />
          <meta property="og:image" content="/texticon.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="741" />
          <meta property="og:url" content="https://wynstrategies`.com" />
          <meta property="og:type" content="website" />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

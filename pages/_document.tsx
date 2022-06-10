import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div className='light x1'></div>
          <div className='light x2'></div>
          <div className='light x3'></div>
          <div className='light x4'></div>
          <div className='light x5'></div>
          <div className='light x6'></div>
          <div className='light x7'></div>
          <div className='light x8'></div>
          <div className='light x9'></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
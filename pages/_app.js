import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

    return(
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/web-logo-4.svg" type="image/svg+xml" />
          <title>Media Assist</title>
          <meta name='description' content='私たちメディアアシストは、教育/研修向けの映像制作やその配信のご相談を通じて皆さまの事業の支援を行う会社として誕生しました。' />
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
  
  export default MyApp;
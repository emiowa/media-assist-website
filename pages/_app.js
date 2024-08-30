import '../styles/globals.css';
import Head from 'next/head';
import Link from 'next/link';


function MyApp({ Component, pageProps }) {
    return(
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <Link rel="icon" href="/web-logo-4.svg" type="image/svg+xml" />
          <title>Media Assist</title>
        </Head>
          <Component {...pageProps} />
      </>
    )
  }
  
  export default MyApp;
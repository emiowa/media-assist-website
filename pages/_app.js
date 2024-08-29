import '../styles/globals.css';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
    return(
      <>
        <Head>
          {/* <Link rel='logo' href='/favicon.ico'/> */}
          <link rel="icon" href="/web-logo-4.svg" type="image/svg+xml" />
          <title>Media Assist</title>
        </Head>
          <Component {...pageProps} />
      </>
    )
  }
  
  export default MyApp;
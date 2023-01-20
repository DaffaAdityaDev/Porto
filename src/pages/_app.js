import Theme from '../styles/theme';
import React from 'react'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link rel="shortcut icon" href="images/logo_me.png" />
      <title>Daffa Aditya Rahman</title>
    </Head>
      <Theme>
  
        <Component {...pageProps} />
      
      </Theme>
    </>
  );
}
 
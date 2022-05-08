import Head from 'next/head';
import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> &lt; RAHUL KHERAJANI /&gt;</title>
        <meta name='keywords' content='portfolio' />
        <meta name='author' content='Rahul Kherajani' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

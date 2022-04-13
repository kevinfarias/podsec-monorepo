import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Head from 'next/head';
import Header from '../components/Header';
import { MediaPlayerProvider } from '../contexts/MediaPlayerContext';

import dynamic from 'next/dynamic'

const PlayerWithNoSSR = dynamic(() => import('../components/MusicPlayer/Player').then((mod) => mod.Player), {
  ssr: false,
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100&display=swap" rel="stylesheet"></link>
      </Head>
      <Header></Header>
      <MediaPlayerProvider>
        <div id={"principal"} style={{ marginBottom: "120px" }}>
            <Component {...pageProps} />
        </div>
        <PlayerWithNoSSR></PlayerWithNoSSR>
      </MediaPlayerProvider>
    </>
  );
}

export default MyApp

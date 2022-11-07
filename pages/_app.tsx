import type { AppProps } from "next/app";

import Head from "next/head";

import Navigation from "../components/layout/navigation/Navigation";
import Footer from "../components/layout/footer/Footer";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

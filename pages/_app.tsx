import type { AppProps } from "next/app";
import Head from "next/head";

import Navigation from "../components/layout/navigation/Navigation";
import Footer from "../components/layout/footer/Footer";
import { SnackbarContextProvider } from "../store/snackbar-context";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SnackbarContextProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </SnackbarContextProvider>
  );
}

export default MyApp;

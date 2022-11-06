import type { AppProps } from "next/app";

import Navigation from "../components/layout/navigation/Navigation";
import Footer from "../components/layout/footer/Footer";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

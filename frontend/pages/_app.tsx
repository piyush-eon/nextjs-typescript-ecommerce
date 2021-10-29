import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Footer, Header } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;

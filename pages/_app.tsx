import "../styles/globals.css";
import type { AppProps /*, AppContext */ } from "next/app";
import Layout from "../components/layout/layout";
import "../styles/fonts.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

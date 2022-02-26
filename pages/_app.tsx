import "../styles/globals.css";
import type { AppProps /*, AppContext */ } from "next/app";
import Layout from "../components/layout/layout";
import "../styles/fonts.css";
import Router, { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Layout key={router.asPath}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

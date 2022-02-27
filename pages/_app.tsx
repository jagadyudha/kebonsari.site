//type
import type { AppProps /*, AppContext */ } from 'next/app';

//router
import { useRouter } from 'next/router';

//components
import Layout from '../components/layout/layout';

//next-seo
import { DefaultSeo } from 'next-seo';
import DataSeo from '../_data/seo.json';
import { cardOpenGraph, cardTwitter } from '../lib/seo';

//styles
import '../styles/globals.css';
import '../styles/fonts.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Layout key={router.asPath}>
      <DefaultSeo
        title={DataSeo.title}
        description={DataSeo.description}
        canonical={DataSeo.url}
        openGraph={cardOpenGraph}
        twitter={cardTwitter}
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

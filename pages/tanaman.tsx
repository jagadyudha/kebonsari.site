import React from 'react';
//seo
import { NextSeo } from 'next-seo';
import DataSeo from '../_data/seo.json';
import { cardTwitter } from '../lib/seo';

const Tanaman = () => {
  const title = 'Tanaman Toga';
  const description = `Jenis-jenis tanaman toga yang ada di kebonsari.`;
  return (
    <main>
      <NextSeo
        title={`${title} - Pemerintah Desa Kebonsari`}
        description={description}
        canonical={`${DataSeo.url}/contact`}
        openGraph={{
          url: `${DataSeo.url}/activities`,
          title: `${title} - Pemerintah Desa Kebonsari`,
          description: description,
          images: [
            {
              url: DataSeo.ogimage,
              width: 1200,
              height: 600,
              alt: title,
              type: 'image/jpeg',
            },
          ],
          site_name: title,
        }}
        twitter={cardTwitter}
      />
    </main>
  );
};

export default Tanaman;

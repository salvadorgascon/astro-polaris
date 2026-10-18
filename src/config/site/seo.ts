import type { FacebookMetaConfig, XMetaConfig } from '@/config/types/seo.types';

export const seoConfig = {
  openGraph: {
    defaultImage: 'https://example.com/images/opengraph.webp',
    locale: 'en_US',
  },
  social:{
    twitterCard: {} as XMetaConfig,
    facebookMeta: {} as FacebookMetaConfig,
  },
};

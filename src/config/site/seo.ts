import type { FacebookMetaConfig, XMetaConfig } from '@/config/core/seo.types';

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

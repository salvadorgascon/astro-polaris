import type { LocalizedNavigationLinks } from '@/i18n/types/navigation.types';

const primaryLinks: LocalizedNavigationLinks = {
  home: { label: 'Home', hint: 'Home' },
};

const bottomLinks: LocalizedNavigationLinks = {};
const topLinks: LocalizedNavigationLinks = {};

export const navigation = {
  top: { links: topLinks },
  header: {
    desktopPrimary: { links: primaryLinks },
    mobilePrimary: { links: primaryLinks },
  },
  bottom: {
    links: bottomLinks,
  },
} as const;

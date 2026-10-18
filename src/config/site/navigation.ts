import { routes } from '@/config/site/routes';
import type { NavigationLinks } from '@/config/types/navigation.types';

const topLinks: NavigationLinks = {  
};

const desktopPrimaryLinks: NavigationLinks = {
  home: { route: routes.home },
};

const mobilePrimaryLinks: NavigationLinks = {
  home: { route: routes.home },
};

const bottomLinks: NavigationLinks = {  
};

export const navigation = {
  top: { links: topLinks },
  header: {
    desktopPrimary: { links: desktopPrimaryLinks },
    mobilePrimary: { links: mobilePrimaryLinks },
  },
  bottom: {
    links: bottomLinks,
  },
} as const;

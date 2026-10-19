import { routes } from '@/config/site/routes';
import type { NavigationLinks, NavigationMenu } from '@/config/types/navigation.types';

import { ui } from '@/i18n/ui';

const enTopLinks: NavigationLinks = {  
};

const enDesktopPrimaryLinks: NavigationMenu = {
  home: { 
    label: ui.en.site.navigation.header.desktopPrimary.home,
    route: routes.home },
};

const enMobilePrimaryLinks: NavigationMenu = {
  home: { 
    label: ui.en.site.navigation.header.mobilePrimary.home,
    route: routes.home },
};

const bottomLinks: NavigationLinks = {  
};

export const navigation = {
  en:{
    top: { links: enTopLinks },
    header: {
      desktopPrimary: { links: enDesktopPrimaryLinks },
      mobilePrimary: { links: enMobilePrimaryLinks },
    },
    bottom: {
      links: bottomLinks,
    },
  }
  
} as const;

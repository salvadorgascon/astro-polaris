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

const enBottomLinks: NavigationLinks = {  
};

export const navigation = {
  en:{
    top: enTopLinks,
    header: {
      desktopPrimary: enDesktopPrimaryLinks,
      mobilePrimary: enMobilePrimaryLinks,
    },
    bottom: enBottomLinks,
  }
  
} as const;

import type { NavigationRouteItem } from '@/config/core/navigation.types';
import { routes } from '@/config/site/routes';

const primaryLinks: NavigationRouteItem[] = [  
];

export const navigation = {
  en: {
    top: { links: [] },
    header: {
      desktopPrimary: { links: primaryLinks },
      mobilePrimary: { links: primaryLinks },
    },
    bottom: {
      links: [],
    },
  }  
} as const;

import type { NavigationLiteralItem, NavigationLiteralLink } from '@/config/core/navigation.types';

const primaryLinks: NavigationLiteralItem[] = [
  { label: 'Home', hint: 'Home' }  
];

export const navigation = {
  top: { links: [] as NavigationLiteralLink[] },
  header: {
    desktopPrimary: { links: primaryLinks },
    mobilePrimary: { links: primaryLinks },
  },
  bottom: {
    links: [      
    ] as NavigationLiteralLink[],
  },
} as const;

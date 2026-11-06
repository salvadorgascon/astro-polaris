import type { SocialNetworkName, SocialProfile } from '@/config/types/social.types';

export const socialConfig: Record<SocialNetworkName, SocialProfile | undefined> = {
  x:{    
    handle: 'your-x-username',
    url: 'https://x.com/', 
  },
  facebook: {
    handle: 'your-facebook-username',
    url: 'https://www.facebook.com/',
  },
  youtube: {
    handle: 'your-youtube-username',
    url: 'https://www.youtube.com/',
  },
  instagram: {
    handle: 'your-instagram-username',
    url: 'https://www.instagram.com/',
  },
  linkedin: undefined,
  github: undefined,
  newsletter: undefined,
  whatsapp: undefined,
  whatsappChannel: undefined,
};

export type SocialNetworkName =
  | 'x'
  | 'facebook'
  | 'youtube'
  | 'instagram'
  | 'linkedin'
  | 'github'
  | 'newsletter'
  | 'whatsapp'
  | 'whatsappChannel';

export type SocialProfile = {
  handle?: string;
  url: string;
};

export type FacebookProfile = SocialProfile & {
  appId: string;
};

export type SocialConfig = {
  x: SocialProfile | undefined;
  facebook: FacebookProfile | undefined;
  youtube: SocialProfile | undefined;
  instagram: SocialProfile | undefined;
  linkedin: SocialProfile | undefined;
  github: SocialProfile | undefined;
  newsletter: SocialProfile | undefined;
  whatsapp: SocialProfile | undefined;
  whatsappChannel: SocialProfile | undefined;
};

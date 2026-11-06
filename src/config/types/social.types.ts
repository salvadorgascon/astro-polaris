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

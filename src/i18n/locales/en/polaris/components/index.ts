import { audioPlayer } from './audio_player';
import { acceptPrivacyField } from './accept_privacy_field';
import { lastModified } from './last_modified';
import { pagination } from './pagination';
import { yesNoField } from './yes_no_field';
import { social } from './social';

export const components = {
  acceptPrivacyField,
  audioPlayer,  
  lastModified,
  pagination,  
  yesNoField,
  social,
} as const;

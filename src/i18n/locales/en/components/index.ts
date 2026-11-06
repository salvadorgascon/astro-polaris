import { audioPlayer } from './audio_player';
import { lastModified } from './last_modified';
import { pagination } from './pagination';
import { social } from './social';
import { yesNoField } from './yes_no_field';
import { acceptPrivacyField } from './accept_privacy_field';
    
export const components = {
  audioPlayer,
  lastModified,
  pagination,
  social,
  yesNoField,
  acceptPrivacyField,
} as const;




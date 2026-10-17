import { audioPlayer } from './audio_player';
import { acceptPrivacyField } from './accept_privacy_field';
import { lastModified } from './last_modified';
import { pagination } from './pagination';
import { yesNoField } from './yes_no_field';

export const components = {
  acceptPrivacyField,
  audioPlayer,  
  lastModified,
  pagination,  
  yesNoField,
} as const;

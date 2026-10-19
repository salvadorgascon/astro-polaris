import { metadata } from './metadata';
import { navigation } from './navigation';
import { regional } from './regional';
import { components } from './components/';
import { pages } from './pages/';



export const site = {
  metadata,
  navigation,
  regional,
  components,
  pages,
} as const;


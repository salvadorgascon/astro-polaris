import { describe, expect, it } from 'vitest';

import { socialConfig } from '@/config/social';

describe('socialConfig', () => {
  it('provides Facebook with its app ID', () => {
    expect((socialConfig.facebook as { appId?: string }).appId).toBe('your-facebook-app-id');
  });
});

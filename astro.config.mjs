// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import vercel from '@astrojs/vercel';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()]
  },

  site: 'https://example.com',
  trailingSlash: 'always',

  image: {
    layout: 'constrained',
    responsiveStyles: false,
  },

  fonts: [
    {
      name: 'Montserrat',
      cssVariable: '--font-display-family',
      provider: fontProviders.google(),
      fallbacks: ['Arial', 'sans-serif'],
      weights: [200, 300, 400, 500, 600, 700, 800],
      styles: ['normal'],
    },
    {
      name: 'Inter',
      cssVariable: '--font-body-family',
      provider: fontProviders.google(),
      fallbacks: ['Arial', 'sans-serif'],
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      styles: ['normal', 'italic'],
    },
  ],

  integrations: [sitemap(), mdx()]
});
/** @type {import('prettier').Config} */
export default {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  tailwindStylesheet: './src/styles/global.css',
  printWidth: 100,
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
};

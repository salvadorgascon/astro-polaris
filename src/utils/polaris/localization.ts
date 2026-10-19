import { navigation } from '@/config/site/navigation';
import { siteSettings } from '@/config/site/settings';
import { ui } from '@/i18n/ui';

export type Locale = (typeof siteSettings.locales)[number];

const supportedLocales = siteSettings.locales;

// Reads the locale prefix from a URL, falling back to the configured default.
export function getLocaleFromUrl(url: URL): Locale {
  const locale = url.pathname.split('/')[1] as Locale;
  return supportedLocales.includes(locale) ? locale : siteSettings.defaultLocale as Locale;
}

// Returns the translation catalog, with the default locale as a fallback.
export function useTranslations(locale: Locale) {
  return ui[locale] ?? ui[siteSettings.defaultLocale as Locale];
}
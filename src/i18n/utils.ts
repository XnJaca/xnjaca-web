import { es } from './es';
import { en } from './en';

export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

const dictionaries = { es, en };

export type Lang = keyof typeof dictionaries;
export type Dict = typeof es;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in dictionaries) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang): Dict {
  return dictionaries[lang] ?? dictionaries[defaultLang];
}

export function getLocalizedPath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}

export const langToFlag: Record<string, string> = {
  en: '🇺🇸',
  ru: '🇷🇺',
  hr: '🇭🇷',
  de: '🇩🇪',
  es: '🇪🇸',
  fr: '🇫🇷',
  it: '🇮🇹',
  pt: '🇵🇹',
  ja: '🇯🇵',
  zh: '🇨🇳',
  ko: '🇰🇷',
};

export function getLangFlag(lang: string = 'en') {
  return langToFlag[lang] || '🌐';
}

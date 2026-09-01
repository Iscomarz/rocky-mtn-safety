import { translations, type Lang } from './translations';

let currentLang = $state<Lang>('en');

// Initialize from localStorage if on client
if (typeof window !== 'undefined') {
	const savedLang = localStorage.getItem('rms_lang');
	if (savedLang === 'en' || savedLang === 'es') {
		currentLang = savedLang;
	}
}

export function getLang(): Lang {
	return currentLang;
}

export function setLang(lang: Lang): void {
	currentLang = lang;
	if (typeof window !== 'undefined') {
		localStorage.setItem('rms_lang', lang);
		document.documentElement.lang = lang;
	}
}

export function toggleLang(): void {
	setLang(currentLang === 'en' ? 'es' : 'en');
}

/**
 * Access translated string using dot notation (e.g., t('nav.home'))
 */
export function t(path: string): string {
	const keys = path.split('.');
	let current: unknown = translations[currentLang];

	for (const key of keys) {
		if (current && typeof current === 'object' && key in current) {
			current = (current as Record<string, unknown>)[key];
		} else {
			// Fallback to English if key missing in current language
			let fallback: unknown = translations.en;
			for (const fbKey of keys) {
				if (fallback && typeof fallback === 'object' && fbKey in fallback) {
					fallback = (fallback as Record<string, unknown>)[fbKey];
				} else {
					return path; // Return key path if not found anywhere
				}
			}
			return typeof fallback === 'string' ? fallback : path;
		}
	}

	return typeof current === 'string' ? current : path;
}

import { isLocale, type Locale } from '@/composables/useLocalized'

const STORAGE_KEY = 'locale'
export const DEFAULT_LOCALE: Locale = 'fr'

/**
 * Langue à utiliser au chargement: le choix mémorisé s'il existe, sinon la
 * langue du navigateur, sinon le français.
 */
export function resolveInitialLocale(): Locale {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (isLocale(stored)) return stored
    } catch {
        // localStorage indisponible (navigation privée, cookies bloqués)
    }

    for (const preferred of navigator.languages ?? [navigator.language]) {
        const base = preferred?.split('-')[0]?.toLowerCase()
        if (isLocale(base)) return base
    }

    return DEFAULT_LOCALE
}

/** Mémorise le choix de l'utilisateur et met à jour l'attribut lang du document. */
export function persistLocale(locale: Locale) {
    try {
        localStorage.setItem(STORAGE_KEY, locale)
    } catch {
        // Le choix ne survivra pas au rechargement, mais la page reste utilisable.
    }
    applyDocumentLang(locale)
}

/** Garde <html lang> aligné sur la langue affichée, pour l'accessibilité et le SEO. */
export function applyDocumentLang(locale: Locale) {
    document.documentElement.setAttribute('lang', locale)
}

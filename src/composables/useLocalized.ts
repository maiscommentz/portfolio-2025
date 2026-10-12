import { useI18n } from 'vue-i18n'

export const LOCALES = ['fr', 'en'] as const
export type Locale = (typeof LOCALES)[number]

/**
 * Un texte traduit. Une chaîne simple signifie « identique dans les deux
 * langues » — pratique pour les noms de technologies ou les noms propres.
 */
export type Localized = string | Record<Locale, string>

/** Une liste traduite, avec le même raccourci que `Localized`. */
export type LocalizedList = string[] | Record<Locale, string[]>

export const isLocale = (value: unknown): value is Locale =>
    typeof value === 'string' && (LOCALES as readonly string[]).includes(value)

/**
 * Résout les champs `Localized` dans la langue courante. Les fonctions lisent
 * `locale.value` à chaque appel, donc un usage direct dans un template ou un
 * `computed` se met à jour tout seul au changement de langue.
 */
export function useLocalized() {
    const { locale } = useI18n()

    const current = () => (isLocale(locale.value) ? locale.value : 'fr')

    const loc = (value: Localized | undefined): string => {
        if (value === undefined) return ''
        return typeof value === 'string' ? value : value[current()]
    }

    const locList = (value: LocalizedList | undefined): string[] => {
        if (value === undefined) return []
        return Array.isArray(value) ? value : value[current()]
    }

    return { loc, locList, locale }
}

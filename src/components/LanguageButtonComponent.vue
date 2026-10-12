<template>
    <div
        class="flex items-center justify-center rounded-full cursor-pointer transition duration-300 ease-in-out"
        role="button"
        tabindex="0"
        :aria-label="$t('utils.language.label')"
        :title="$t('utils.language.label')"
        @click="toggleLocale"
        @keydown.enter.prevent="toggleLocale"
        @keydown.space.prevent="toggleLocale"
    >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-languages-icon lucide-languages"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>
    </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { isLocale } from '@/composables/useLocalized'
import { persistLocale } from '@/i18n/locale'

const { locale } = useI18n()

// Deux langues seulement: l'icône bascule de l'une à l'autre.
const toggleLocale = () => {
    const next = isLocale(locale.value) && locale.value === 'fr' ? 'en' : 'fr'
    locale.value = next
    persistLocale(next)
}
</script>

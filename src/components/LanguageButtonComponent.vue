<template>
    <div class="flex items-center space-x-1 select-none" role="group" :aria-label="$t('utils.language.label')">
        <button
            v-for="(code, index) in LOCALES"
            :key="code"
            type="button"
            class="uppercase text-sm tracking-wide transition-opacity duration-200 hover:underline underline-offset-4"
            :class="locale === code ? 'font-bold' : 'opacity-50 hover:opacity-100'"
            :aria-current="locale === code ? 'true' : undefined"
            :lang="code"
            @click="setLocale(code)"
        >
            {{ code }}<span v-if="index < LOCALES.length - 1" class="ml-1 opacity-40">/</span>
        </button>
    </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { LOCALES, type Locale } from '@/composables/useLocalized'
import { persistLocale } from '@/i18n/locale'

const { locale } = useI18n()

const setLocale = (code: Locale) => {
    locale.value = code
    persistLocale(code)
}
</script>

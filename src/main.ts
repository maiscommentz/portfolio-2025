import '@/assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import Vue3Marquee from 'vue3-marquee'

import App from './App.vue'
import router from './router'
import lang from './assets/lang.json'


const i18n = createI18n({
    legacy: false,
    locale: 'fr',
    fallbackLocale: 'en',
    messages: lang
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(Vue3Marquee)

app.mount('#app')

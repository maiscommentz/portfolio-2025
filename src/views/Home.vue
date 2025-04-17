<template>
    <main>
        <!-- Section Hero -->
        <div class="container mx-auto h-[75vh] md:h-full py-12 px-6">
            <div class="flex flex-row items-center h-full">
                <div class="w-full md:w-1/2 flex flex-col justify-center lg:pr-32">
                    <h1 style="font-size: 47px; line-height: 1;" class="md:text-5xl font-semibold">{{ $t('hero.title') }}</h1>
                    <p class="text-base md:text-lg mt-4">{{ $t('hero.subtitle')}}</p>
                    <div class="flex flex-col md:flex-row mt-8 space-y-6 md:space-y-0 md:space-x-6">
                        <RouterLink to="#contact"><Button type="primary" class="w-full">{{ $t('hero.cta1') }}</Button></RouterLink>
                        <RouterLink to="/cv"><Button type="secondary" class="w-full">{{ $t('hero.cta2') }}</Button></RouterLink>
                    </div>
                </div>
                <div class="hidden w-full md:w-1/2 md:flex justify-center">
                    <img src="/images/hero.svg" alt="Illustration d'un développeur web" class="w-full" />
                </div>
            </div>
        </div>
        <!-- Down Arrow -->
        <div class="flex justify-center py-6">
            <RouterLink to="#about" >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 cursor-pointer text-cBlack animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </RouterLink>
        </div>
        <!-- Section About -->
        <div id="about" class="container mx-auto py-12 px-6">
            <Title>
                <template v-slot:title>{{ $t('about.title') }}</template>
                <template v-slot:subtitle>{{ $t('about.subtitle') }}</template>
            </Title>
            <div class="flex flex-col md:flex-row justify-center md:space-y-0 space-y-6 md:space-x-16">
                <img src="/images/about.jpg" alt="Photos de moi" class="w-full md:w-1/3 object-cover rounded-lg" />
                <div class="flex flex-col w-full md:w-2/3 justify-between">
                    <p class="text-lg" v-html="$t('about.description', {br: '<br><br>', bold: '<b>', nobold: '</b>'})"/>
                    <img src="/images/signature.png" alt="Signature de Filipe" class="w-2/3 md:w-1/3 mt-6 md:mt-12" />
                </div>
            </div>
        </div>
        <!-- Section Technologies -->
        <div class="container mx-auto py-24 px-6">
            <Carousel />
        </div>
        <!-- Section Career -->
        <div id="career" class="container mx-auto py-12 px-6">
            <Title>
                <template v-slot:title>{{ $t('career.title') }}</template>
                <template v-slot:subtitle>{{ $t('career.subtitle') }}</template>
            </Title>
            <TimelineH v-if="windowWidth >= 1024"/>
            <TimelineV v-else/>
        </div>
        <!-- Section Projects -->
        <div id="projects" class="container mx-auto py-12 px-6">
            <Title>
                <template v-slot:title>{{ $t('projects.title') }}</template>
                <template v-slot:subtitle>{{ $t('projects.subtitle') }}</template>
            </Title>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Project v-for="item in projects" :key="item.id" :data="item"/>
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
import Button from '@/components/Button.vue'
import Title from '@/components/Title.vue'
import Carousel from '@/components/Carousel.vue'
import TimelineH from '@/components/TimelineH.vue'
import TimelineV from '@/components/TimelineV.vue'
import Project from '@/components/Project.vue'
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
const projects = computed(() => {
  const items = tm('projects.items')
  return Object.entries(items).map(([key, value]) => ({
    id: key,
    title: t(`projects.items.${key}.title`),
    image: value.image
  }))
})


const windowWidth = ref(window.innerWidth)

const updateWidth = () => {
    windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})
</script>
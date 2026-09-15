<template>
    <main>
        <!-- Section Hero -->
        <div class="container mx-auto h-[75vh] md:h-full py-12 px-6 text-cBlack dark:text-cWhite">
            <div class="flex flex-row items-center h-full">
                <div class="w-full md:w-1/2 flex flex-col justify-center lg:pr-32">
                    <h1 style="font-size: 47px; line-height: 1;" class="md:text-5xl font-semibold">{{ $t('hero.title') }}</h1>
                    <p class="text-base md:text-lg mt-4">{{ $t('hero.subtitle')}}</p>
                    <div class="flex flex-col md:flex-row mt-8 space-y-6 md:space-y-0 md:space-x-6">
                        <RouterLink to="#contact"><ButtonComponent type="primary" class="w-full">{{ $t('hero.cta1') }}</ButtonComponent></RouterLink>
                        <RouterLink to="/cv"><ButtonComponent type="secondary" class="w-full">{{ $t('hero.cta2') }}</ButtonComponent></RouterLink>
                    </div>
                </div>
                <div class="hidden w-full md:w-1/2 md:flex justify-center dark:bg-cWhite rounded-3xl">
                    <img src="/images/hero.svg" alt="Illustration d'un développeur web" class="w-full" />
                </div>
            </div>
        </div>
        <!-- Down Arrow -->
        <div class="flex justify-center py-6">
            <RouterLink to="#about" >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 cursor-pointer dark:text-cWhite text-cBlack animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </RouterLink>
        </div>
        <!-- Section About -->
        <div id="about" class="container mx-auto py-12 px-6">
            <TitleComponent>
                <template #title>{{ $t('about.title') }}</template>
                <template #subtitle>{{ $t('about.subtitle') }}</template>
            </TitleComponent>
            <div class="flex flex-col md:flex-row justify-center md:space-y-0 space-y-6 md:space-x-16 dark:text-cWhite">
                <img src="/images/about.jpg" alt="Photos de moi" class="w-full md:w-1/3 object-cover rounded-lg" />
                <div class="flex flex-col w-full md:w-2/3 justify-between">
                    <p class="text-lg" v-html="$t('about.description', {br: '<br><br>', bold: '<b>', nobold: '</b>'})" />
                    <img src="/images/signature.png" alt="Signature de Filipe" class="w-2/3 md:w-1/3 mt-6 md:mt-12 dark:hidden" />
                    <img src="/images/signature-dark.png" alt="Signature de Filipe" class="w-2/3 md:w-1/3 mt-6 md:mt-12 hidden dark:flex" />
                </div>
            </div>
        </div>
        <!-- Section Technologies -->
        <div class="container mx-auto py-24 px-6">
            <CarouselComponent />
        </div>
        <!-- Section Career -->
        <div id="career" class="container mx-auto py-12 px-6">
            <TitleComponent>
                <template #title>{{ $t('career.title') }}</template>
                <template #subtitle>{{ $t('career.subtitle') }}</template>
            </TitleComponent>
            <TimelineHComponent v-if="windowWidth >= 1024"/>
            <TimelineVComponent v-else/>
        </div>
        <!-- Section Projects -->
        <div id="projects" class="container mx-auto py-12 px-6">
            <TitleComponent>
                <template #title>{{ $t('projects.title') }}</template>
                <template #subtitle>{{ $t('projects.subtitle') }}</template>
            </TitleComponent>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCardComponent v-for="item in projects" :key="item.id" :data="item"/>
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import TitleComponent from '@/components/TitleComponent.vue'
import CarouselComponent from '@/components/CarouselComponent.vue'
import TimelineHComponent from '@/components/TimelineHComponent.vue'
import TimelineVComponent from '@/components/TimelineVComponent.vue'
import ProjectCardComponent from '@/components/ProjectCardComponent.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { projects } from '@/data/projects'



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
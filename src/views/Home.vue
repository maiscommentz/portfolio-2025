<template>
    <main>
        <!-- Section Hero -->
        <div class="container mx-auto py-8 px-6">
            <div class="flex flex-row">
                <div class="w-full flex flex-col justify-center">
                    <h1 class="text-5xl font-semibold">{{ $t('hero.title') }}</h1>
                    <p class="text-lg mt-4">{{ $t('hero.subtitle')}}</p>
                    <div class="mt-8 space-x-6">
                        <Button type="primary">{{ $t('hero.cta1') }}</Button>
                        <Button type="secondary">{{ $t('hero.cta2') }}</Button>
                    </div>
                </div>
                <div class="w-full flex justify-center">
                    <img src="/images/hero.png" alt="Illustration d'un développeur web" class="w-full" />
                </div>
            </div>
        </div>
        <!-- Down Arrow -->
        <div class="flex justify-center py-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 cursor-pointer text-cBlack animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
        <!-- Section About -->
        <div id="about" class="container mx-auto py-8 px-6">
            <Title>
                <template v-slot:title>{{ $t('about.title') }}</template>
                <template v-slot:subtitle>{{ $t('about.subtitle') }}</template>
            </Title>
            <div class="flex flex-row justify-center space-x-16">
                <img src="/images/about.jpg" alt="Photos de moi" class="w-1/3 object-cover" />
                <div class="flex flex-col w-2/3 justify-between">
                    <p class="text-lg" v-html="$t('about.description', {br: '<br><br>', bold: '<b>', nobold: '</b>'})"/>
                    <img src="/images/signature.png" alt="Signature de Filipe" class="w-1/2 mt-4" />
                </div>
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
import Button from '@/components/Button.vue'
import Title from '@/components/Title.vue'
</script>
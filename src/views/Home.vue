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
    </main>
</template>
<script setup lang="ts">
import Button from '@/components/Button.vue'
</script>
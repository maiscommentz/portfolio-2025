<template>
    <main>
        <div class="container mx-auto lg:h-full pt-12 md:pt-0 pb-12 px-6">
            <div class="flex flex-col lg:flex-row justify-center items-center lg:space-x-16 my-16">
                <span class="lg:flex hidden justify-center font-bold lg:e404-lg e404 text-cPrimary w-full">{{ $t('utils.notfound.title')}}</span>
                <div class="flex flex-col justilfy-center w-full h-full space-y-4 lg:space-y-8">
                    <span class="lg:hidden flex font-bold e404 text-cPrimary w-full">{{ $t('utils.notfound.title')}}</span>
                    <p class="text-6xl font-bold">{{ $t('utils.notfound.subtitle')}}</p>
                    <p class="font-normal lg:text-2xl text-xl">{{ $t('utils.notfound.description')}}</p>
                    <RouterLink to="/"><ButtonComponent class="md:w-fit w-full lowercase">{{ $t('utils.notfound.button')}}</ButtonComponent></RouterLink>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
</script>
<style scoped>
.e404 {
    @apply text-8xl;
    font-size: 12rem;
}

.e404-lg {
    @apply text-8xl;
    font-size: 20rem;
}
</style>
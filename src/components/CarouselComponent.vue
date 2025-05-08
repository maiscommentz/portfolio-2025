<template>
    <Vue3Marquee :clone="true" :duration="15">
        <div v-for="img in imgArray" :key="img.alt" class="flex dark:hidden items-center justify-center w-full h-full bg-cBlack p-8 rounded-lg ml-8">
            <img :src="img.src" :alt="img.alt" class="w-16 max-h-16 object-contain" />
        </div>
        <div v-for="img in imgArrayDark" :key="img.alt" class="hidden dark:flex items-center justify-center w-full h-full bg-cWhite p-8 rounded-lg ml-8">
            <img :src="img.src" :alt="img.alt" class="w-16 max-h-16 object-contain" />
        </div>
    </Vue3Marquee>
</template>

<script setup lang="ts">
const imgArray = [
    {src: '/icons/java.png', alt: 'Logo de Java'},
    {src: '/icons/docker.png', alt: 'Logo de Docker'},
    {src: '/icons/vue.png', alt: 'Logo de Vue.js'},
    {src: '/icons/git.png', alt: 'Logo de Git.js'},
    {src: '/icons/php.png', alt: 'Logo de PHP'},
    {src: '/icons/kotlin.png', alt: 'Logo de Kotlin'},
    {src: '/icons/kubernetes.png', alt: 'Logo de Kubernetes'},
    {src: '/icons/python.png', alt: 'Logo de Python'},
    {src: '/icons/cplusplus.png', alt: 'Logo de C++'}
]

const imgArrayDark = [
    {src: '/icons/java-dark.png', alt: 'Logo de Java'},
    {src: '/icons/docker-dark.png', alt: 'Logo de Docker'},
    {src: '/icons/vue-dark.png', alt: 'Logo de Vue.js'},
    {src: '/icons/git-dark.png', alt: 'Logo de Git.js'},
    {src: '/icons/php-dark.png', alt: 'Logo de PHP'},
    {src: '/icons/kotlin-dark.png', alt: 'Logo de Kotlin'},
    {src: '/icons/kubernetes-dark.png', alt: 'Logo de Kubernetes'},
    {src: '/icons/python-dark.png', alt: 'Logo de Python'},
    {src: '/icons/cplusplus-dark.png', alt: 'Logo de C++'}
]
</script>

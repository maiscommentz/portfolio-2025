<template>
    <div class="container mx-auto py-6 px-6 dark:text-cWhite">
        <h2 v-if="section.title" class="text-3xl font-semibold" v-html="section.title"></h2>

        <!-- Paragraphes libres -->
        <p v-if="section.type === 'text'" class="text-lg" :class="section.title ? 'mt-4' : ''" v-html="section.content"></p>

        <!-- Liste à puces -->
        <ul v-else-if="section.type === 'list'" class="text-lg list-disc pl-6 space-y-2" :class="section.title ? 'mt-4' : ''">
            <li v-for="(item, index) in section.items" :key="index" v-html="item"></li>
        </ul>

        <!-- Pastilles de technologies -->
        <ul v-else-if="section.type === 'tags'" class="flex flex-wrap gap-3" :class="section.title ? 'mt-4' : ''">
            <li v-for="(item, index) in section.items" :key="index"
                class="text-lg px-4 py-1 rounded-full outline outline-2 outline-cBlack dark:outline-cWhite">
                {{ item }}
            </li>
        </ul>

        <!-- Chiffres clés -->
        <dl v-else-if="section.type === 'stats'" class="flex flex-wrap gap-x-16 gap-y-6" :class="section.title ? 'mt-4' : ''">
            <div v-for="(item, index) in section.items" :key="index">
                <dt class="text-4xl font-semibold text-cPrimary">{{ item.value }}</dt>
                <dd class="text-lg mt-1">{{ item.label }}</dd>
            </div>
        </dl>

        <!-- Citation mise en avant -->
        <blockquote v-else-if="section.type === 'quote'"
            class="border-l-4 border-cPrimary pl-6" :class="section.title ? 'mt-4' : ''">
            <p class="text-lg italic" v-html="section.content"></p>
            <footer v-if="section.author" class="text-lg mt-3">
                — {{ section.author }}<span v-if="section.role">, {{ section.role }}</span>
            </footer>
        </blockquote>

        <!-- Galerie -->
        <template v-else-if="section.type === 'gallery'">
            <div v-if="section.layout === 'grid'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-6">
                <div v-for="(image, index) in section.images" :key="index" class="w-full flex flex-col justify-center items-center">
                    <img :src="resolve(image.src)" :alt="image.alt" class="max-h-[80vh] md:max-h-[60vh] object-contain mb-4 drop-shadow-md" />
                    <p class="text-sm text-center">{{ image.alt }}</p>
                </div>
            </div>
            <div v-else>
                <div v-for="(image, index) in section.images" :key="index" class="w-full flex flex-col justify-center mt-6">
                    <img :src="resolve(image.src)" :alt="image.alt" class="max-h-[80vh] object-contain rounded-lg justify-center" />
                    <p class="text-lg text-center mt-4">{{ image.alt }}</p>
                </div>
            </div>
        </template>
    </div>
</template>
<script setup lang="ts">
import type { ProjectSection } from '@/data/projects'

const props = defineProps<{
    section: ProjectSection
    projectId: string
}>()

// Une URL absolue est utilisée telle quelle, sinon l'image vient du dossier du projet.
const resolve = (src: string) =>
    src.startsWith('http') ? src : `/images/projects/${props.projectId}/${src}`
</script>

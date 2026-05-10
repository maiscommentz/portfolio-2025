<template>
    <main>
        <div class="container mx-auto lg:h-full pt-12 md:pt-0 pb-12 px-6">
            <div class="flex flex-col lg:flex-row h-full bg-cBlack text-cWhite dark:bg-cWhite dark:text-cBlack rounded-lg px-12 py-12">
                <div class="w-full lg:w-1/2 lg:flex justify-center lg:pr-12 lg:pb-0 pb-12">
                    <div v-if="project.image_url" class="flex h-full w-full outline outline-2 outline-cWhite dark:outline-cBlack rounded-lg justify-center items-center p-8" :style="{ backgroundColor: project.color || '#ffffff' }">
                        <img :src="project.image_url" :alt="'Projet ' + project.id" class="max-h-full max-w-full object-contain" />
                    </div>
                    <img v-else :src="'/images/projects/' + project.image" :alt="'Projet ' + project.id" class="flex h-full w-full outline outline-2 outline-cWhite dark:outline-cBlack object-cover rounded-lg" />
                </div>
                <div class="w-full lg:w-1/2 flex flex-col justify-between">
                    <div>
                        <h1 class="text-2xl md:text-4xl text-left" v-html="$t(`projects.items.${projectId}.title`, {bold: '<b>', nobold: '</b>'})"></h1>
                        <p class="text-lg text-cPrimary pt-6" v-html="$t(`projects.items.${projectId}.date`, {br: '<br><br>', bold: '<b>', nobold: '</b>'})"></p>
                    </div>
                    <div class="flex flex-col md:flex-row space-x-0 md:space-x-6">
                        <a v-if="project.demo" :href="project.demo_link">
                            <ButtonComponent type="tertiary" active class="mt-6 w-full md:w-fit">
                                {{ $t('utils.projects.demo') }}
                            </ButtonComponent>
                        </a>
                        <ButtonComponent v-else type="tertiary" class="mt-6 w-full md:w-fit line-through">
                                {{ $t('utils.projects.demo') }}
                        </ButtonComponent>
                        <a v-if="project.source" :href="project.source_link">
                            <ButtonComponent type="tertiary" active class="mt-6 w-full md:w-fit" :href="project.link" target="_blank">
                                {{ $t('utils.projects.source') }}
                            </ButtonComponent>
                        </a>
                        <ButtonComponent v-else type="tertiary" class="mt-6 w-full md:w-fit line-through">
                                {{ $t('utils.projects.source') }}
                        </ButtonComponent>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mx-auto py-6 px-6 dark:text-cWhite">
            <h1 class="text-3xl font-semibold" v-html="$t(`utils.projects.description`)"></h1>
            <p class="text-lg mt-4" v-html="$t(`projects.items.${projectId}.description`, {br: '<br><br>', bold: '<b>', nobold: '</b>'})"></p>
        </div>
        <div class="container mx-auto py-6 px-6 dark:text-cWhite">
            <h1 class="text-3xl font-semibold" v-html="$t(`utils.projects.stack`)"></h1>
            <p class="text-lg mt-4" v-html="$t(`projects.items.${projectId}.stack`, {br: '<br><br>', bold: '<b>', nobold: '</b>'})"></p>
        </div>
        <div class="container mx-auto py-6 px-6 dark:text-cWhite">
            <h1 class="text-3xl font-semibold" v-html="$t(`utils.projects.myrole`)"></h1>
            <p class="text-lg mt-4" v-html="$t(`projects.items.${projectId}.myrole`, {br: '<br>', bold: '<b>', nobold: '</b>'})"></p>
        </div>
        <div v-if="project.gallery" class="container mx-auto py-6 px-6 dark:text-cWhite">
            <h1 class="text-3xl font-semibold" v-html="$t(`utils.projects.gallery`)"></h1>
            <div v-if="project.gallery_layout === 'grid'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-6 mb-24">
                <div v-for="(image, index) in project.gallery" :key="index" class="w-full flex flex-col justify-center items-center">
                    <img v-if="image.src.startsWith('http')" :src="image.src" :alt="image.alt" class="max-h-[80vh] md:max-h-[60vh] object-contain mb-4 drop-shadow-md" />
                    <img v-else :src="'/images/projects/' + projectId + '/' + image.src" :alt="image.alt" class="max-h-[80vh] md:max-h-[60vh] object-contain mb-4 drop-shadow-md" />
                    <p class="text-sm text-center" v-html="`alt: ` + image.alt"></p>
                </div>
            </div>
            <div v-else>
                <div v-for="(image, index) in project.gallery" :key="index" class="w-full flex flex-col justify-center mt-6 mb-24">
                    <img v-if="image.src.startsWith('http')" :src="image.src" :alt="image.alt" class="max-h-[80vh] object-contain rounded-lg justify-center" />
                    <img v-else :src="'/images/projects/' + projectId + '/' + image.src" :alt="image.alt" class="max-h-[80vh] object-contain rounded-lg justify-center" />
                    <p class="text-lg text-center mt-4" v-html="`alt: ` + image.alt"></p>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const router = useRouter()
const { tm } = useI18n()

const projectId = route.params.projectId as string
const items = tm('projects.items') as Record<string, any>

// Redirect to 404 if the project doesn't exist
if (!items || !items[projectId]) {
    router.replace('/404')
}

const project = computed(() => {
    return items[projectId] || {}
})
</script>
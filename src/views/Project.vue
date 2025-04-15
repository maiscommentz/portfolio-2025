<template>
    <main>
        <div class="container mx-auto md:h-full pb-12 px-6">
            <div class="flex flex-col md:flex-row h-full bg-cBlack text-white rounded-lg px-12 py-12">
                <div class="w-full md:w-1/2 md:flex justify-center lg:pr-12">
                    <img :src="'/images/projects/' + project.image" :alt="'Projet ' + project.id" class="flex h-full w-full outline outline-2 outline-cWhite object-cover rounded-lg" />
                </div>
                <div class="w-full md:w-1/2 flex flex-col justify-between">
                    <div>
                        <h1 class="text-4xl text-center md:text-left" v-html="$t(`projects.items.${projectId}.title`, {bold: '<b>', nobold: '</b>'})"></h1>
                        <p class="text-lg text-cGreen pt-6" v-html="$t(`projects.items.${projectId}.date`, {br: '<br><br>', bold: '<b>', nobold: '</b>'})"></p>
                    </div>
                    <div class="flex space-x-6">
                        <a v-if="project.demo" :href="project.demo_link">
                            <Button type="tertiary" active class="mt-6 w-full md:w-fit">
                                {{ $t('utils.projects.demo') }}
                            </Button>
                        </a>
                        <Button v-else type="tertiary" class="mt-6 w-full md:w-fit line-through">
                                {{ $t('utils.projects.demo') }}
                        </Button>
                        <a v-if="project.source" :href="project.source_link">
                            <Button type="tertiary" active class="mt-6 w-full md:w-fit" :href="project.link" target="_blank">
                                {{ $t('utils.projects.source') }}
                            </Button>
                        </a>
                        <Button v-else type="tertiary" class="mt-6 w-full md:w-fit line-through">
                                {{ $t('utils.projects.source') }}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mx-auto py-6 px-6">
            <h1 class="text-3xl font-semibold" v-html="$t(`utils.projects.description`)"></h1>
            <p class="text-lg mt-4" v-html="$t(`projects.items.${projectId}.description`, {br: '<br><br>', bold: '<b>', nobold: '</b>'})"></p>
        </div>
        <div class="container mx-auto py-6 px-6">
            <h1 class="text-3xl font-semibold" v-html="$t(`utils.projects.stack`)"></h1>
            <p class="text-lg mt-4" v-html="$t(`projects.items.${projectId}.stack`, {br: '<br><br>', bold: '<b>', nobold: '</b>'})"></p>
        </div>
        <div class="container mx-auto py-6 px-6">
            <h1 class="text-3xl font-semibold" v-html="$t(`utils.projects.myrole`)"></h1>
            <p class="text-lg mt-4" v-html="$t(`projects.items.${projectId}.myrole`, {br: '<br>', bold: '<b>', nobold: '</b>'})"></p>
        </div>
        <div v-if="project.gallery" class="container mx-auto py-6 px-6">
            <h1 class="text-3xl font-semibold" v-html="$t(`utils.projects.gallery`)"></h1>
            <div v-for="(image, index) in project.gallery" :key="index" class="w-full flex flex-col justify-center mt-6 mb-24">
                <img :src="'/images/projects/flashlog/' + image.src" :alt="image.alt" class="max-h-[80vh] object-contain rounded-lg justify-center" />
                <p class="text-lg text-center mt-4" v-html="`alt: ` + image.alt"></p>
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
import Button from '@/components/Button.vue'
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
const route = useRoute()
const { t, tm } = useI18n()

const projectId = route.params.projectId as string
const project = computed(() => {
    return tm(`projects.items.${projectId}`)
})
</script>
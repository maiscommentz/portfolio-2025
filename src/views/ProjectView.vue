<template>
    <main>
        <div class="container mx-auto lg:h-full pt-12 md:pt-0 pb-12 px-6">
            <div class="flex flex-col lg:flex-row h-full bg-cBlack text-cWhite dark:bg-cWhite dark:text-cBlack rounded-lg px-12 py-12">
                <div class="w-full lg:w-1/2 lg:flex justify-center lg:pr-12 lg:pb-0 pb-12">
                    <div v-if="project.color" class="flex h-full w-full outline outline-2 outline-cWhite dark:outline-cBlack rounded-lg justify-center items-center p-8" :style="{ backgroundColor: project.color }">
                        <img :src="project.image_url || '/images/projects/' + project.image" :alt="'Projet ' + project.id" class="max-h-full object-contain" :style="{ maxWidth: project.image_scale || '65%', transform: project.image_offset_y ? `translateY(${project.image_offset_y})` : undefined }" />
                    </div>
                    <img v-else :src="'/images/projects/' + project.image" :alt="'Projet ' + project.id" class="flex h-full w-full outline outline-2 outline-cWhite dark:outline-cBlack object-cover rounded-lg" />
                </div>
                <div class="w-full lg:w-1/2 flex flex-col justify-between">
                    <div>
                        <h1 class="text-2xl md:text-4xl text-left" v-html="project.title"></h1>
                        <p class="text-lg text-cPrimary pt-6" v-html="project.date"></p>
                    </div>
                    <div class="flex flex-col md:flex-row space-x-0 md:space-x-6">
                        <a v-if="project.demo" :href="project.demo_link" target="_blank" rel="noopener noreferrer">
                            <ButtonComponent type="tertiary" active class="mt-6 w-full md:w-fit">
                                {{ $t('utils.projects.demo') }}
                            </ButtonComponent>
                        </a>
                        <ButtonComponent v-else type="tertiary" class="mt-6 w-full md:w-fit line-through">
                                {{ $t('utils.projects.demo') }}
                        </ButtonComponent>
                        <a v-if="project.source" :href="project.source_link" target="_blank" rel="noopener noreferrer">
                            <ButtonComponent type="tertiary" active class="mt-6 w-full md:w-fit">
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
        <ProjectSectionComponent
            v-for="(section, index) in project.sections"
            :key="index"
            :section="section"
            :project-id="projectId"
        />
        <div class="pb-24"></div>
    </main>
</template>
<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import ProjectSectionComponent from '@/components/ProjectSectionComponent.vue'
import { computed, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { projects } from '@/data/projects'
import type { Project } from '@/data/projects'

const route = useRoute()
const router = useRouter()

// Reactive: vue-router reuses this component when only the param changes.
const projectId = computed(() => route.params.projectId as string)

const project = computed<Partial<Project>>(() => {
    return projects.find(p => p.id === projectId.value) || {}
})

// Redirect to 404 if the project doesn't exist
watchEffect(() => {
    if (!project.value.id) {
        router.replace('/404')
    }
})
</script>
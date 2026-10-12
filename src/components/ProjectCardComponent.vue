<template>
    <div class="flex outline outline-2 outline-cBlack dark:outline-cWhite dark:text-cWhite p-6 rounded-lg h-full w-full">
        <div class="flex flex-col-reverse w-full">
            <div class="w-full h-full flex flex-col justify-between mt-6">
                <p class="text-lg" v-html="loc(data.title)"></p>
                <RouterLink :to="'/project/' + data.id">
                    <div class="flex w-fit flex-row space-x-2 items-center cursor-pointer hover:underline underline-offset-4 mt-6">
                        <img src="/icons/click-dark.svg" :alt="$t('utils.seemore')" class="w-5 h-5 flex dark:hidden" />
                        <img src="/icons/click.svg" :alt="$t('utils.seemore')" class="w-5 h-5 hidden dark:flex" />
                        <p class="text-lg">{{ $t('utils.seemore') }}</p>
                    </div>
                </RouterLink>
            </div>
            <div class="flex min-h-48 max-h-48 w-full">
                <div v-if="data.color" class="flex h-full w-full outline outline-2 outline-cBlack dark:outline-cWhite rounded-lg justify-center items-center p-6" :style="{ backgroundColor: data.color }">
                    <img :src="data.image_url || '/images/projects/' + data.image" :alt="$t('utils.projectAlt', { name: name(data.title) })" class="max-h-full object-contain" :style="{ maxWidth: data.image_scale || '65%', transform: data.image_offset_y ? `translateY(${data.image_offset_y})` : undefined }" />
                </div>
                <img v-else :src="'/images/projects/' + data.image" :alt="$t('utils.projectAlt', { name: name(data.title) })" class="flex h-full w-full outline outline-2 outline-cBlack dark:outline-cWhite object-cover rounded-lg" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { Project } from '@/data/projects'
import { useLocalized } from '@/composables/useLocalized'
import type { Localized } from '@/composables/useLocalized'

defineProps<{ data: Project }>()

const { loc } = useLocalized()

// Le titre est de la forme "<b>Nom</b> accroche" : on n'en garde que le nom.
const name = (title: Localized | undefined) =>
    loc(title).match(/<b>(.*?)<\/b>/)?.[1] ?? loc(title)
</script>

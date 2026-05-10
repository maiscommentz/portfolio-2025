<template>
    <div class="flex outline outline-2 outline-cBlack dark:outline-cWhite dark:text-cWhite p-6 rounded-lg h-full w-full">
        <div class="flex flex-col-reverse w-full">
            <div class="w-full h-full flex flex-col justify-between mt-6">
                <p class="text-lg" v-html="$t('projects.items.' + data.id + '.title', {bold: '<b>', nobold: '</b>'})"></p>
                <RouterLink :to="'/project/' + data.id">
                    <div class="flex w-fit flex-row space-x-2 items-center cursor-pointer hover:underline underline-offset-4 mt-6">
                        <img src="/icons/click-dark.svg" alt="Plus d'informations" class="w-5 h-5 flex dark:hidden" />
                        <img src="/icons/click.svg" alt="Plus d'informations" class="w-5 h-5 hidden dark:flex" />
                        <p class="text-lg">{{ $t('utils.seemore') }}</p>
                    </div>
                </RouterLink>
            </div>
            <div class="flex min-h-48 max-h-48 w-full">
                <div v-if="data.image_url" class="flex h-full w-full outline outline-2 outline-cBlack dark:outline-cWhite rounded-lg justify-center items-center p-6" :style="{ backgroundColor: data.color || '#ffffff' }">
                    <img :src="data.image_url" :alt="'Projet ' + data.id" class="max-h-full max-w-full object-contain" />
                </div>
                <img v-else :src="'/images/projects/' + data.image" :alt="'Projet ' + data.id" class="flex h-full w-full outline outline-2 outline-cBlack dark:outline-cWhite object-cover rounded-lg" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps({
    data: {
        type: Object,
        required: true
    }
})
</script>

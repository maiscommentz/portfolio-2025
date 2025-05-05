<template>
    <div class="flex outline outline-2 outline-cBlack p-6 rounded-lg h-full w-full">
        <div class="flex flex-col-reverse w-full">
            <div class="w-full h-full flex flex-col justify-between mt-6">
                <p class="text-lg" v-html="$t('projects.items.' + data.id + '.title', {bold: '<b>', nobold: '</b>'})"></p>
                <RouterLink :to="'/project/' + data.id">
                    <div class="flex w-fit flex-row space-x-2 items-center cursor-pointer hover:underline underline-offset-4 mt-6">
                        <img src="/icons/click_black.svg" alt="Plus d'informations" class="w-5 h-5" />
                        <p class="text-lg">{{ $t('utils.seemore') }}</p>
                    </div>
                </RouterLink>
            </div>
            <div class="flex min-h-48 max-h-48 w-full">
                <img :src="'/images/projects/' + data.image" :alt="'Projet ' + data.id" class="flex h-full w-full outline outline-2 outline-cBlack object-cover rounded-lg" />
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

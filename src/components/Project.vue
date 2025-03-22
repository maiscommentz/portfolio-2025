<template>
    <div class="outline outline-2 outline-cBlack p-6 rounded-lg">
        <div class="flex flex-row space-x-4">
            <div class="w-1/2 flex flex-col justify-between">
                <p class="text-lg" v-html="$t('projects.items.' + index + '.title', {bold: '<b>', nobold: '</b>'})"></p>
                <div class="flex w-fit flex-row space-x-2 items-center hover:cursor-pointer">
                    <img src="/icons/click_black.svg" alt="Plus d'informations" class="w-4 h-4" />
                    <p>{{ $t('utils.seemore') }}</p>
                </div>
            </div>
            <img src="/images/about.jpg" alt="Projet 1" class="w-1/2 outline outline-2 outline-cBlack object-contain rounded-lg" />
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps({
    index: Number
})
</script>

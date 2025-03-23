<template>
    <div class="outline outline-2 outline-cBlack p-6 rounded-lg h-full w-full">
        <div class="flex flex-col-reverse xl:flex-row xl:space-x-4 h-full w-full">
            <div class="w-full xl:w-1/2 flex flex-col justify-between mt-6">
                <p class="text-lg" v-html="$t('projects.items.' + index + '.title', {bold: '<b>', nobold: '</b>'})"></p>
                <div class="flex w-fit flex-row space-x-2 items-center hover:cursor-pointer mt-6">
                    <img src="/icons/click_black.svg" alt="Plus d'informations" class="w-5 h-5" />
                    <p class="text-lg">{{ $t('utils.seemore') }}</p>
                </div>
            </div>
            <div class="flex h-full w-full">
                <img :src="'/images/projects/' + $t('projects.items.' + index + '.image')" :alt="'Projet ' + (index!+1)" class="outline outline-2 outline-cBlack object-cover rounded-lg" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps({
    index: Number
})
</script>

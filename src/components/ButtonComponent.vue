<template>
    <button v-if="type == 'primary'" class="dark:bg-cWhite bg-cBlack outline-2 outline-cBlack dark:outline-cWhite outline dark:text-cBlack text-cWhite px-4 py-2 rounded-md hover:bg-cWhite hover:text-cBlack transition duration-300 ease-in-out dark:hover:bg-cBlack dark:hover:text-cWhite">
        <slot></slot>
    </button>
    <button v-else-if="type == 'secondary'" class="dark:bg-cBlack bg-cWhite dark:text-cWhite text-cBlack outline-2 dark:outline-cWhite outline-cBlack outline px-4 py-2 rounded-md hover:bg-cBlack hover:text-cWhite transition duration-300 ease-in-out dark:hover:bg-cWhite dark:hover:text-cBlack">
        <slot></slot>
    </button>
    <button v-else-if="type == 'tertiary'" class="bg-cBlack dark:bg-cWhite text-cWhite dark:text-cBlack outline-2 outline-cWhite dark:outline-cBlack outline px-4 py-2 rounded-md" :class="active ? 'hover:bg-cWhite dark:hover:bg-cBlack hover:text-cBlack dark:hover:text-cWhite transition duration-300 ease-in-out' : 'cursor-none'">
        <slot></slot>
    </button>
</template>
<script setup lang="ts">
defineProps({
    type: {
        type: String,
        default: 'primary'
    },
    active: Boolean
})
</script>
<template>
    <button v-if="type == 'primary'" class="bg-cBlack outline-2 outline-cBlack outline text-cWhite px-4 py-2 rounded-md hover:bg-cWhite hover:text-cBlack transition duration-300 ease-in-out">
        <slot></slot>
    </button>
    <button v-else-if="type == 'secondary'" class="bg-cWhite text-cBlack outline-2 outline-cBlack outline px-4 py-2 rounded-md hover:bg-cBlack hover:text-cWhite transition duration-300 ease-in-out">
        <slot></slot>
    </button>
</template>
<script setup lang="ts">
defineProps({
    type: String,
    
})
</script>
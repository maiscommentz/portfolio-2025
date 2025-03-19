<template>
    <div class="flex flex-row w-full space-x-6 items-center pb-16">
        <div class="bg-cGreen font-semibold text-3xl text-nowrap p-2">
            <slot name="title"></slot>
        </div>
        <div class="text-sm text-wrap">
            <slot name="subtitle"></slot>
        </div>
    </div>
</template>
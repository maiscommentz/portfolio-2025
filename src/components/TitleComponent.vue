<template>
    <div class="flex flex-col md:flex-row w-full items-start md:items-center pb-12">
        <div class="bg-cPrimary dark:text-cBlack font-semibold text-3xl text-nowrap p-2">
            <slot name="title"></slot>
        </div>
        <div class="text-base text-wrap mt-6 md:mt-0 md:ml-6 dark:text-cWhite">
            <slot name="subtitle"></slot>
        </div>
    </div>
</template>
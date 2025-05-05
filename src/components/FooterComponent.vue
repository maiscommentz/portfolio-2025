<template>
    <footer>
        <div id="contact" class="container mx-auto py-12 px-6">
            <div class="flex flex-col md:flex-row items-center bg-cBlack text-white rounded-lg px-12 py-12">
                <div class="md:w-2/3">
                    <h2 class="text-3xl md:text-4xl font-semibold">{{ $t('contact.title') }}</h2>
                    <div class="mt-12 md:text-xl break-all">
                        <div class="flex items-center mb-6 cursor-pointer hover:underline underline-offset-4 w-fit">
                            <img src="/icons/email.svg" alt="Icone email" class="w-8 h-8 mr-4" />
                            <a :href="`mailto:${$t('contact.email', {at: '@'})}`">{{ $t('contact.email', {at: '@'}) }}</a>
                        </div>
                        <div class="flex items-center mb-6 cursor-pointer hover:underline underline-offset-4 w-fit">
                            <img src="/icons/linkedin.svg" alt="Icone Linkedin" class="w-8 h-8 mr-4" />
                            <a :href="`https://linkedin.com/in/${$t('contact.linkedin')}`">{{ $t('contact.linkedin') }}</a>
                        </div>
                        <div class="flex items-center cursor-pointer hover:underline underline-offset-4 w-fit">
                            <img src="/icons/github.svg" alt="Icone Github" class="w-8 h-8 mr-4" />
                            <a :href="`https://github.com/${$t('contact.github')}`">{{ $t('contact.github') }}</a>
                        </div>
                    </div>
                </div>
                <div class="hidden w-1/3 h-full md:flex justify-center">
                    <img src="/images/contact.svg" alt="Illustration de contact" />
                </div>
            </div>
        </div>
    </footer>
</template>
<script setup lang="ts">
</script>

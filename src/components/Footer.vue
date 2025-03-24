<template>
    <footer>
        <div id="contact" class="container mx-auto py-12 px-6">
            <div class="flex flex-row items-center bg-cBlack text-white rounded-lg px-12 py-12">
                <div class="w-2/3">
                    <h2 class="text-4xl font-semibold">{{ $t('contact.title') }}</h2>
                    <div class="mt-12 text-xl">
                        <div class="flex items-center mb-6 cursor-pointer hover:underline underline-offset-4">
                            <img src="/icons/email.svg" alt="Icone email" class="w-8 h-8 mr-4" />
                            <a>{{ $t('contact.email', {at: '@'}) }}</a>
                        </div>
                        <div class="flex items-center mb-6 cursor-pointer hover:underline underline-offset-4">
                            <img src="/icons/linkedin.svg" alt="Icone Linkedin" class="w-8 h-8 mr-4" />
                            <a>{{ $t('contact.linkedin') }}</a>
                        </div>
                        <div class="flex items-center mb-6 cursor-pointer hover:underline underline-offset-4">
                            <img src="/icons/github.svg" alt="Icone Github" class="w-8 h-8 mr-4" />
                            <a>{{ $t('contact.github') }}</a>
                        </div>
                    </div>
                </div>
                <div class="w-1/3 h-full flex justify-center">
                    <img src="/images/contact.svg" alt="Illustration de contact" class="w-3/5" />
                </div>
            </div>
        </div>
    </footer>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

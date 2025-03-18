<template>
    <footer class="bg-gray-800 text-white py-6">
        <div class="container mx-auto text-center">
            <p>&copy; 2024 MySite. All Rights Reserved.</p>
            <div class="flex justify-center space-x-6 mt-4">
                <RouterLink to="" class="hover:text-gray-400">Privacy Policy</RouterLink>
                <RouterLink to="" class="hover:text-gray-400">Terms of Service</RouterLink>
                <RouterLink to="" class="hover:text-gray-400">Contact Us</RouterLink>
            </div>
        </div>
    </footer>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

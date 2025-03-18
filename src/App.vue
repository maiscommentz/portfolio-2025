<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
     <Header/>
    <!-- Main Content Section -->
    <main class="container mx-auto flex-1 p-6">
      <RouterView />
    </main>
    <!-- Footer -->
    <Footer />
  </div>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
<style scoped>
</style>

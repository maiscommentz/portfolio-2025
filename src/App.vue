<template>
  <div class="flex flex-col min-h-screen">
    <!-- Custom cursor -->
    <div class="cursor hidden lg:flex">
      <div class="cursor__ball cursor__ball--big fill-[#e0e0e0]">
        <svg width="80" height="80" viewBox="0 0 30 30">
          <circle cx="15" cy="15" r="12" />
        </svg>
      </div>
      <div class="cursor__ball cursor__ball--small fill-cWhite">
        <svg width="10" height="10" viewBox="0 0 10 10">
          <circle cx="5" cy="5" r="4" />
        </svg>
      </div>
    </div>
    <RouterView v-slot="{ Component }">
      <!-- Header -->
      <HeaderComponent/>
      <!-- Main Content Section -->
      <component :is="Component" />
      <!-- Footer -->
      <FooterComponent/>
    </RouterView>
  </div>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import { gsap } from 'gsap'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const bigBall = ".cursor__ball--big";
const smallBall = ".cursor__ball--small"
document.body.addEventListener('mousemove', onMouseMove);

// Move the cursor
function onMouseMove(e: MouseEvent) {
  gsap.to(bigBall, .5, {
    x: e.pageX - 40,
    y: e.pageY - window.scrollY - 40
  })
  gsap.to(smallBall, .1, {
    x: e.pageX - 5,
    y: e.pageY - window.scrollY - 5
  })
}
</script>
<style scoped>
</style>

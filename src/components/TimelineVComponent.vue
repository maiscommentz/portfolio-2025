<template>
  <div class="flex flex-col w-full h-full overflow-x-hidden">
    <div v-for="(_, index) in labels" :key="index" class="career-label">
      <div class="career-label-label bg-cBlack text-cWhite dark:border-cPrimary dark:border-2 p-3 rounded-lg clickable h-full w-full">
        <p>{{ $t(`career.items.${index}.title`) }}</p>
        <div class="flex w-full justify-between items-center mt-1">
          <p class=" text-cPrimary">{{ $t(`career.items.${index}.date`) }}</p>
          <!-- <img src="/icons/click.svg" alt="Plus d'informations" class="w-5 h-5" /> -->
        </div>
      </div>
      <div class="career-label-arrow flex justify-center items-center w-full h-full my-2">
        <svg v-if="index != labels.length - 1" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-cBlack dark:text-cWhite" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </div>
</template>  
  
<script setup lang="ts">
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted } from 'vue';

gsap.registerPlugin(ScrollTrigger);

// Seul le nombre d'etapes compte ici: les libelles sont lus dans le template.
const labels = [0, 1, 2, 3];

onMounted(() => {
  labels.forEach((point, i) => {
    const label = document.querySelector(`.career-label:nth-child(${i + 1}) .career-label-label`);
    const arrow = document.querySelector(`.career-label:nth-child(${i + 1}) .career-label-arrow`);
    if (label) {
      gsap.from(label, {
        opacity: 0,
        x: 1200,
        duration: 0.6,
        delay: i * 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.career-label',
          start: "top 50%",
        },
      });
      gsap.from(arrow, {
        opacity: 0,
        y: -50,
        duration: 0.6,
        delay: 0.6 + i * 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.career-label',
          start: "top 50%",
        },
      });

    }
  });
});
</script>
  
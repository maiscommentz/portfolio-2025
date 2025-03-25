<template>
  <div ref="timelineRef" class="relative flex flex-col items-start space-y-16 py-10 px-6 md:px-16">
    <div
      v-for="(point, i) in points"
      :key="'point-' + i"
      class="relative flex flex-col md:flex-row items-start md:items-center group"
    >
      <!-- Dot -->
      <div class="absolute left-0 md:left-[10px] top-0 md:top-1/2 transform md:-translate-y-1/2 w-4 h-4 bg-cBlack rounded-full z-10 timeline-dot" />

      <!-- Vertical Line -->
      <div
        v-if="i !== points.length - 1"
        class="absolute left-[6px] top-4 md:top-1/2 md:translate-y-0 w-px h-full bg-cBlack z-0"
        style="min-height: 80px"
      />

      <!-- Content -->
      <div class="ml-8 md:ml-20 bg-cBlack text-cWhite p-4 rounded-lg w-full md:max-w-md cursor-pointer transition transform hover:scale-105 label">
        <p class="text-base md:text-xl">{{ point.title }}</p>
        <div class="flex justify-between items-center mt-2">
          <p class="text-base md:text-xl text-cGreen">{{ point.date }}</p>
          <img src="/icons/click.svg" alt="More info" class="w-6 h-6" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useI18n } from 'vue-i18n'

gsap.registerPlugin(ScrollTrigger)
const { t } = useI18n()

const timelineRef = ref<HTMLElement | null>(null)

const points = [
  {
    title: t('career.items.0.title'),
    date: t('career.items.0.date'),
  },
  {
    title: t('career.items.1.title'),
    date: t('career.items.1.date'),
  },
  {
    title: t('career.items.2.title'),
    date: t('career.items.2.date'),
  },
  {
    title: t('career.items.3.title'),
    date: t('career.items.3.date'),
  },
]

onMounted(() => {
  // Dot animation
  gsap.from('.timeline-dot', {
    opacity: 0,
    scale: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: timelineRef.value,
      start: 'top 80%',
    },
  })

  // Label animation
  gsap.from('.label', {
    opacity: 0,
    x: 50,
    duration: 0.6,
    stagger: 0.3,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: timelineRef.value,
      start: 'top 80%',
    },
  })
})
</script>

<template>
  <div ref="timelineContainer" class="w-full relative timeline">
    <!-- SVG -->
    <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet" class="w-full overflow-visible">
      <!-- Curved path -->
      <path d="M0, 200 C500, 500 500, 0 1000, 200" class="stroke-cBlack" fill="none" stroke-width="2" />

      <!-- Dots -->
      <circle
        v-for="(point, i) in points" :key="i"
        :cx="point.cx" :cy="point.cy"
        r="10" class="fill-cBlack timeline-dot" />

      <!-- Lines -->
      <line
        v-for="(point, i) in points" :key="'line' + i"
        :x1="point.cx" :y1="point.cy" :x2="point.cx" :y2="point.offsetY"
        class="stroke-cBlack" stroke-width="2" />
    </svg>

    <!-- Labels (HTML) -->
    <div
      v-for="(point, i) in points" :key="'label' + i"
      class="absolute label z-10"
      :style="labelStyles[i]">
      <div class="bg-cBlack text-cWhite p-3 rounded-lg w-[300px]">
          <p>{{ point.title }}</p>
          <div class="flex w-full justify-between items-center mt-1">
              <p class=" text-cGreen">{{ point.date }}</p>
              <!-- <img src="/icons/click.svg" alt="Plus d'informations" class="w-5 h-5" /> -->
          </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
  import { ref, reactive, watchEffect, onMounted, onBeforeUnmount } from 'vue';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { useI18n } from 'vue-i18n';
  import { useResizeObserver } from '@vueuse/core';
  
  gsap.registerPlugin(ScrollTrigger);
  
  const { t } = useI18n();
  const timelineContainer = ref<HTMLDivElement | null>(null);
  const svgWidth = 1000;
  const labelWidth = 300;
  
  const points = [
    { cx: 100, cy: 252.5, offsetY: 60, title: t('career.items.0.title'), date: t('career.items.0.date') },
    { cx: 366.67, cy: 289, offsetY: 400, title: t('career.items.1.title'), date: t('career.items.1.date') },
    { cx: 633.33, cy: 176, offsetY: 0, title: t('career.items.2.title'), date: t('career.items.2.date') },
    { cx: 900, cy: 167.5, offsetY: 300, title: t('career.items.3.title'), date: t('career.items.3.date') },
  ];
  
  const labelStyles = reactive<{ left?: string; right?: string; top: string }[]>([]);
  
  watchEffect(() => {
    if (!timelineContainer.value) return;
  
    const containerWidth = timelineContainer.value.getBoundingClientRect().width;
    const scale = containerWidth / svgWidth;
  
    labelStyles.length = 0;
    points.forEach((point, i) => {
      const isFirst = i === 0;
      const isLast = i === points.length - 1;
      const top = `${point.offsetY * scale}px`;
  
      if (isFirst) {
        labelStyles.push({ left: '0px', top });
      } else if (isLast) {
        labelStyles.push({ right: '0px', top });
      } else {
        labelStyles.push({ left: `${point.cx * scale - labelWidth / 2}px`, top });
      }
    });
  });
  
  // Optional: also keep `updateLabelsPosition` for legacy use
  const updateLabelsPosition = () => {
    if (!timelineContainer.value) return;
  
    const containerWidth = timelineContainer.value.getBoundingClientRect().width;
    const scale = containerWidth / svgWidth;
  
    labelStyles.length = 0;
  
    points.forEach((point, i) => {
      const isFirst = i === 0;
      const isLast = i === points.length - 1;
      const top = `${point.offsetY * scale}px`;
  
      if (isFirst) {
        labelStyles.push({ left: '0px', top });
      } else if (isLast) {
        labelStyles.push({ right: '0px', top });
      } else {
        labelStyles.push({ left: `${point.cx * scale - labelWidth / 2}px`, top });
      }
    });
  };
  
  useResizeObserver(timelineContainer, updateLabelsPosition);
  
  onMounted(() => {
    const path = document.querySelector(".timeline path") as SVGPathElement;
    const pathLength = path?.getTotalLength();
  
    if (path) {
      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });
  
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: path,
          start: "top 20%",
        },
      });
    }
  
    gsap.from(".timeline-dot", {
      opacity: 0,
      scale: 0,
      transformOrigin: "center",
      duration: 0.6,
      stagger: 0.4,
      delay: 0,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: path,
        start: "top 20%",
      },
    });
  
    document.querySelectorAll(".timeline line").forEach((line, i) => {
      const length = (line as SVGLineElement).getTotalLength?.() || 100;
  
      gsap.set(line, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });
  
      gsap.to(line, {
        strokeDashoffset: 0,
        duration: 0.8,
        delay: 1 + i * 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: path,
          start: "top 20%",
        },
      });
    });
  
    document.querySelectorAll(".label").forEach((el, i) => {
      const point = points[i];
      const fromY = point.offsetY < point.cy ? -50 : 50;
  
      gsap.from(el, {
        opacity: 0,
        y: fromY,
        duration: 0.6,
        delay: 1.5 + i * 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: path,
          start: "top 20%",
        },
      });
    });

    window.addEventListener('resize', updateLabelsPosition);
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateLabelsPosition);
  });
  </script>
  
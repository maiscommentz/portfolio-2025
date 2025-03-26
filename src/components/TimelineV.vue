<template>
    <div ref="timelineContainer" class="relative w-full timeline">
      <!-- SVG Timeline -->
      <svg viewBox="0 0 500 550" preserveAspectRatio="none" class="w-full overflow-visible">
        <!-- Main vertical line -->
        <line x1="0" y1="0" x2="0" y2="550" class="stroke-cBlack" stroke-width="2" />
  
        <!-- Dots -->
        <circle v-for="(point, i) in points" :key="i"
                :cx="point.cx" :cy="point.cy"
                r="10" class="fill-cBlack timeline-dot" />
    
        <!-- Lines -->
        <line v-for="(point, i) in points" :key="'line' + i"
              :x1="point.cx" :y1="point.cy" :x2="point.cx" :y2="point.offsetY"
              class="stroke-cBlack" stroke-width="2" />

      </svg>
  
      <!-- Labels (HTML) -->
      <div v-for="(point, i) in points" :key="'label' + i"
            class="absolute label transition-transform duration-300 ease-in-out hover:scale-105"
            :style="labelStyles[i]">
            <div class="bg-cBlack text-cWhite p-3 rounded-lg clickable h-[120px] w-full">
                <p>{{ point.title }}</p>
                <div class="flex w-full justify-between items-center mt-1">
                    <p class=" text-cGreen">{{ point.date }}</p>
                    <img src="/icons/click.svg" alt="Plus d'informations" class="w-3.5 h-3.5" />
                </div>
            </div>
        </div>
    </div>
  </template>  
  
<script setup lang="ts">
import gsap from 'gsap';
import { ref, reactive, watchEffect, onMounted, onBeforeUnmount } from 'vue';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useI18n } from 'vue-i18n';
import { useResizeObserver } from '@vueuse/core';

gsap.registerPlugin(ScrollTrigger);
const { t } = useI18n();

const points = [
    {cx: 0, cy: 50, offsetX: 80, offsetY: 0, title: t('career.items.0.title'), date: t('career.items.0.date')},
    {cx: 0, cy: 200, offsetX: 80, offsetY: 10, title: t('career.items.1.title'), date: t('career.items.1.date')},
    {cx: 0, cy: 350, offsetX: 80, offsetY: 20, title: t('career.items.2.title'), date: t('career.items.2.date')},
    {cx: 0, cy: 500, offsetX: 80, offsetY: 10, title: t('career.items.3.title'), date: t('career.items.3.date')},
];

const timelineContainer = ref<HTMLDivElement | null>(null);

const getSvgHeight = () => {
  return timelineContainer.value?.clientHeight || window.innerHeight;
};

const svgHeight = getSvgHeight();
const labelHeight = 120;

const labelStyles = reactive<{ left?: string; right?: string; top: string }[]>([]);
  
  watchEffect(() => {
    if (!timelineContainer.value) return;
  
    const containerHeight = getSvgHeight();
    const scale = containerHeight / svgHeight;
  
    labelStyles.length = 0;
    points.forEach((point, i) => {
      labelStyles.push({ left: `${point.offsetX * scale}px`, top: `${point.cy * scale + labelHeight / 2}px` });
    });
  });
  
  // Optional: also keep `updateLabelsPosition` for legacy use
  const updateLabelsPosition = () => {
    if (!timelineContainer.value) return;
  
    const containerHeight = getSvgHeight();
    const scale = containerHeight / svgHeight;
  
    labelStyles.length = 0;
  
    points.forEach((point, i) => {
      labelStyles.push({ left: `${point.offsetX * scale}px`, top: `${(point.cy * scale) + (labelHeight / 2 * i) - labelHeight/3}px` });
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
  
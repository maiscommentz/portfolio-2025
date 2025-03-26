<template>
    <div ref="timelineContainer" class="relative w-full timeline">
      <!-- SVG Timeline -->
      <svg viewBox="0 0 500 700" preserveAspectRatio="none" class="w-full h-auto overflow-visible"  style="aspect-ratio: 5 / 7">
        <!-- Main vertical line -->
        <line x1="0" y1="0" x2="0" y2="700" class="stroke-cBlack" stroke-width="2" />
  
        <!-- Dots -->
        <circle
          v-for="(point, i) in points"
          :key="'dot-' + i"
          :cx="point.cx"
          :cy="point.cy + point.offsetY"
          r="10"
          class="fill-cBlack timeline-dot"
        />
  
        <!-- Horizontal lines -->
        <line
          v-for="(point, i) in points"
          :key="'line-' + i"
          :x1="point.cx"
          :y1="point.cy + point.offsetY"
          :x2="point.cx + point.offsetX"
          :y2="point.cy + point.offsetY"
          class="stroke-cBlack"
          stroke-width="2"
        />
      </svg>
  
      <!-- Absolutely Positioned Labels -->
      <div v-for="(point, i) in points" :key="'label' + i"
            class="absolute label transition-transform duration-300 ease-in-out hover:scale-105"
            :style="labelStyles[i]">
            <div class="bg-cBlack text-cWhite p-3 rounded-lg clickable h-[150px] w-[]">
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
    {cx: 0, cy: 250, offsetX: 80, offsetY: 10, title: t('career.items.1.title'), date: t('career.items.1.date')},
    {cx: 0, cy: 450, offsetX: 80, offsetY: 20, title: t('career.items.2.title'), date: t('career.items.2.date')},
    {cx: 0, cy: 650, offsetX: 80, offsetY: 10, title: t('career.items.3.title'), date: t('career.items.3.date')},
];

const timelineContainer = ref<HTMLDivElement | null>(null);
const svgHeight = 700;
const labelHeight = 300;
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
      return {
        top: top,
        left: 0
      }
    });
  });
  
</script>
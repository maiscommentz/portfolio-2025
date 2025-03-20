<template>
    <div class="w-full timeline">
        <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet" class="w-full overflow-visible">
            <!-- Curved path -->
            <path d="M0, 200 C500, 500 500, 0 1000, 200" class="stroke-cBlack" fill="none" stroke-width="2" />
            <!-- Dots -->
            <circle v-for="(point, i) in points" :key="i"
                    :cx="point.cx" :cy="point.cy"
                    r="10" class="fill-cBlack timeline-dot" />
            <!-- Lines -->
            <line v-for="(point, i) in points" :key="'line' + i"
                  :x1="point.cx" :y1="point.cy" :x2="point.cx" :y2="point.offsetY"
                  class="stroke-cBlack" stroke-width="2" />
            <!-- Labels -->
            <foreignObject v-for="(point, i) in points" :key="'label' + i"
                            :x="point.cx - (point.width / 2)" :y="point.offsetY"
                            :width="point.width" height="200" class="overflow-visible">
                <div class="bg-cBlack text-cWhite p-2 rounded-lg text-sm hover:scale-105 ease-in-out transform transition duration-300">
                    <p>{{ point.title }}</p>
                    <div class="flex w-full justify-between">
                        <p class="text-cGreen">{{ point.date }}</p>
                        <img src="/icons/click.svg" alt="Plus d'informations" class="w-4 h-4" />
                    </div>
                </div>
            </foreignObject>
        </svg>
    </div>
</template>
  
<script setup lang="ts">
import gsap from 'gsap';
import { onMounted } from 'vue';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const points = [
    {   
        cx: 100,
        cy: 252.5,
        width: 200,
        offsetY: 60, // box above dot
        title: "Apprentissage à l'EMF Fribourg",
        date: "Septembre 2019",
    },
    {
        cx: 366.67,
        cy: 289,
        width: 200,
        offsetY: 400, // box below dot
        title: "Stage de développeur web à l'Agence MiNT",
        date: "Septembre 2022",
    },
    {
        cx: 633.33,
        cy: 176,
        width: 200,
        offsetY: 0, // box above dot
        title: "Etudiant bachelor à la HEIA-FR",
        date: "Septembre 2023",
    },
    {
        cx: 900,
        cy: 167.5,
        width: 200,
        offsetY: 300, // box below dot
        title: "CEO chez kodee",
        date: "Novembre 2023",
    },
];

onMounted(() => {
    const svg = document.querySelectorAll(".timeline")

    const path = document.querySelector(".timeline path") as SVGPathElement;
    const pathLength = path?.getTotalLength();

    if (path) {
        // Set initial styles for the animation
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
                start: "bottom 20%",
            },
        });
    }

    // Dots animation
    gsap.from(".timeline-dot", {
        opacity: 0,
        scale: 0,
        transformOrigin: "center",
        duration: 0.6,
        stagger: 0.4,
        delay: 0,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: svg,
            start: "bottom 80%",
        },
    });

    // Lines animation
    document.querySelectorAll("line").forEach((line, i) => {
        const length = (line as SVGLineElement).getTotalLength?.() || 100; // fallback if not supported

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
                trigger: svg,
                start: "bottom 80%",
            },
        });
    });

    // Labels animation
    document.querySelectorAll("foreignObject").forEach((el, i) => {
        const point = points[i];
        const fromY = point.offsetY < point.cy ? -50 : 50; // Above → from top, Below → from bottom

        gsap.from(el, {
            opacity: 0,
            y: fromY,
            duration: 0.6,
            delay: 1.5 + i * 0.3,
            ease: "power2.out",
            scrollTrigger: {
                trigger: svg,
                start: "bottom 80%",
            },
        });
    });
});
</script>
<style scoped>
</style>

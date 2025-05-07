<template>
    <header>
      <nav class="container mx-auto flex justify-between items-center py-6 md:py-12 px-6">
        <div class="text-3xl font-bold">
          <RouterLink to="/">Filipe F.</RouterLink>
        </div>
  
        <!-- Burger Menu Icon (visible on small screens) -->
        <div class="md:hidden">
          <button class="relative h-8 w-8 focus:outline-none" @click="isMenuOpen = !isMenuOpen">
            <!-- Burger Icon -->
            <svg 
              class="absolute inset-0 transition-opacity duration-300 ease-in-out"
              :class="isMenuOpen ? 'opacity-0' : 'opacity-100'"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
            >
              <path 
                class="fill-cBlack"
                d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
              />
            </svg>

            <!-- Close Icon -->
            <svg
              class="absolute inset-0 transition-opacity duration-300 ease-in-out"
              :class="isMenuOpen ? 'opacity-100' : 'opacity-0'"
              viewBox="0 0 19 20" xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="fill-cBlack"
                d="M13.414 12l4.95-4.95a1 1 0 0 0-1.414-1.414L12 10.586l-4.95-4.95A1 1 0 0 0 5.636 7.05l4.95 4.95-4.95 4.95a1 1 0 0 0 1.414 1.414l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414-1.414z"
              />
            </svg>
          </button>
        </div>
        
        <!-- Desktop Menu -->
        <ul class="hidden md:flex space-x-6 [&>li:hover]:underline [&>li]:underline-offset-4 items-center">
          <li><RouterLink to="/#about">à propos</RouterLink></li>
          <li><RouterLink to="/#career">parcours</RouterLink></li>
          <li><RouterLink to="/#projects">projets</RouterLink></li>
          <li><RouterLink to="/#contact">contact</RouterLink></li>
          <li></li>
          <ThemeButtonComponent />
        </ul>
      </nav>

      <hr class="md:hidden border-t border-cBlack" />

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform opacity-0 -translate-y-2"
        enter-to-class="transform opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform opacity-100 translate-y-0"
        leave-to-class="transform opacity-0 -translate-y-2"
      >
        <div v-if="isMenuOpen" class="absolute md:hidden container mx-auto items-center px-6 z-100 bg-cWhite shadow-lg py-4">
          <ul class="flex flex-col space-y-2">
            <li @click="isMenuOpen = false"><RouterLink to="/#about">à propos</RouterLink></li>
            <li @click="isMenuOpen = false"><RouterLink to="/#career">parcours</RouterLink></li>
            <li @click="isMenuOpen = false"><RouterLink to="/#projects">projets</RouterLink></li>
            <li @click="isMenuOpen = false"><RouterLink to="/#contact">contact</RouterLink></li>
          </ul>
        </div>
      </transition>
    </header>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';
  import ThemeButtonComponent from '@/components/ThemeButtonComponent.vue';
  
  const isMenuOpen = ref(false);
  </script>
  
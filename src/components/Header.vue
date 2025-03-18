<template>
    <header class="bg-gray-800 text-white">
      <nav class="container mx-auto flex justify-between items-center py-4 px-6">
        <div class="text-xl font-bold">
          <RouterLink to="/">kodee template</RouterLink>
        </div>
  
        <!-- Burger Menu Icon (visible on small screens) -->
        <div class="md:hidden">
          <button @click="isMenuOpen = !isMenuOpen" class="focus:outline-none">
            <svg 
              v-if="!isMenuOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            <svg
              v-if="isMenuOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
  
        <!-- Desktop Menu -->
        <ul class="hidden md:flex space-x-6">
          <li><RouterLink to="/" class="hover:text-gray-400">Home</RouterLink></li>
          <li><RouterLink to="/about" class="hover:text-gray-400">About</RouterLink></li>
          <li><RouterLink to="/services" class="hover:text-gray-400">Services</RouterLink></li>
          <li><RouterLink to="/contact" class="hover:text-gray-400">Contact</RouterLink></li>
        </ul>
      </nav>
  
      <!-- Mobile Menu (visible when burger menu is clicked) -->
      <div v-if="isMenuOpen" class="md:hidden bg-gray-800">
        <ul class="flex flex-col space-y-2 px-6 py-4">
          <li><RouterLink to="/" class="hover:text-gray-400">Home</RouterLink></li>
          <li><RouterLink to="/about" class="hover:text-gray-400">About</RouterLink></li>
          <li><RouterLink to="/services" class="hover:text-gray-400">Services</RouterLink></li>
          <li><RouterLink to="/contact" class="hover:text-gray-400">Contact</RouterLink></li>
        </ul>
      </div>
    </header>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';
  
  const isMenuOpen = ref(false);
  </script>
  
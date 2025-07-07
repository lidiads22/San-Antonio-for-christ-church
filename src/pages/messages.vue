<script setup>
import { ref } from 'vue'
import pastors from '../img/pasters.jpg'
import crossPicture from '../img/cross-picture.webp'

const isOpen = ref(false)
</script>

<template>
  <main>
    <!-- NAV HEADER -->
    <header class="relative">
      <div class="container px-6 py-6 mx-auto lg:flex lg:items-center lg:justify-between">
        <div class="flex items-center justify-between ">
          <a class="flex items-center -mx-1" href="#">
            <!-- Logo -->
            <svg class="w-8 h-8 mx-1 sm:h-10 sm:w-10" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- SVG path truncated for brevity -->
              <circle cx="24.5" cy="24.5" r="24.5" fill="#475F45" />
            </svg>

            <div class="mx-1 text-gray-700">
              <h3 class="uppercase tracking-[0.15em] font-medium">San Antonio For Christ</h3>
              <p class="text-xs italic">343 Spaatz St, San Antonio, TX 78211</p>
            </div>
          </a>

          <!-- Mobile Menu Toggle -->
          <button class="text-gray-600 lg:hidden" @click="isOpen = !isOpen">
            <img
              :src="pastors"
              alt="Pastors"
              class="w-10 h-10 rounded-full mx-1 sm:h-12 sm:w-12 object-cover"
            />
          </button>
        </div>

        <!-- Navigation Links -->
        <div :class="[isOpen ? 'opacity-100' : 'opacity-0 -translate-x-full']"
             class="absolute lg:static transition-all duration-300 w-full py-12 lg:py-0 left-1/2 lg:opacity-100 lg:translate-x-0 lg:bg-transparent lg:w-auto -translate-x-1/2 top-20 sm:top-24 bg-[#475F45]">
          <nav class="flex flex-col items-center space-y-8 lg:flex-row lg:space-y-0 lg:-mx-4">
            <a href="/" class="font-medium text-white lg:text-[#475F45] lg:hover:text-gray-400 lg:mx-4">Home</a>
            <a href="#" class="font-medium text-white lg:text-[#475F45] lg:hover:text-gray-400 lg:mx-4">About Us</a>
            <a href="#" class="font-medium text-white lg:text-[#475F45] lg:hover:text-gray-400 lg:mx-4">Services</a>
            <a href="#" class="font-medium text-white lg:text-[#475F45] lg:hover:text-gray-400 lg:mx-4">Events</a>
            <a class="px-8 py-2.5 text-white lg:text-[#475F45] lg:hover:bg-[#475F45] lg:hover:text-white duration-300 transition-colors font-medium lg:mx-4 border-2 lg:border-[#475F45] border-white" href="#">Connect</a>
          </nav>
        </div>
      </div>
    </header>



    <!-- MESSAGES CONTENT -->
    <section class="px-6 py-12 mx-auto max-w-5xl text-center">
      <h1 class="text-4xl font-serif font-bold text-[#475F45] mb-4">Sunday Messages & Sermons</h1>
      <p class="text-gray-600 text-lg max-w-xl mx-auto mb-10">
        Listen to past sermons, follow new series, and stay encouraged throughout the week.
      </p>

<div class="bg-white rounded-lg shadow p-4 border border-gray-200 text-center">
  <img src="/src/img/praise.png" class="w-full h-40 object-cover rounded mb-3" />
  <h2 class="text-xl font-semibold text-[#475F45] mb-1">"Sunday, June 29, 2025"</h2>
  <p class="text-sm text-gray-600 mb-2">Pastor Hector</p>
  <a
    href="https://www.facebook.com/watch/?v=2137026813474881"
    target="_blank"
    class="text-[#5177f6] font-medium text-sm"
  >
    Watch on Facebook
  </a>
</div>

<div class="bg-white rounded-lg shadow p-4 border border-gray-200 text-center">
  <img src="/src/img/praise.png" class="w-full h-40 object-cover rounded mb-3" />
  <h2 class="text-xl font-semibold text-[#475F45] mb-1">"Sunday, June 18th"</h2>
  <p class="text-sm text-gray-600 mb-2">Pastor Hector</p>
  <a
    href="https://www.facebook.com/watch/?v=743380788067628"
    target="_blank"
    class="text-[#5177f6] font-medium text-sm"
  >
    Watch on Facebook
  </a>
</div>

<div class="bg-white rounded-lg shadow p-4 border border-gray-200 text-center">
  <img src="/src/img/praise.png" class="w-full h-40 object-cover rounded mb-3" />
  <h2 class="text-xl font-semibold text-[#475F45] mb-1">"Sunday, June 15th"</h2>
  <p class="text-sm text-gray-600 mb-2">Pastor Hector</p>
  <a
    href="https://www.facebook.com/watch/?v=1083091810333354"
    target="_blank"
    class="text-[#5177f6] font-medium text-sm"
  >
    Watch on Facebook
  </a>
</div>
  
    </section>



  </main>
</template>


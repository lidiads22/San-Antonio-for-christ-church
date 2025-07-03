<script setup>
import { ref } from 'vue'
import pastors from '../img/pasters.jpg'
import crossPicture from '../img/cross-picture.webp'

const isOpen = ref(false)
</script>

<template>
  <main class="p-6 text-center">
    <h1 class="text-3xl font-bold text-[#475F45]">Messages Page</h1>
    <p class="text-gray-600 mt-4">
      This is where you'll display messages, sermons, or updates.
    </p>

    <!-- You can add dynamic content later here -->
  </main>
</template>

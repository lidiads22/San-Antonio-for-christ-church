<template>
  <div class="min-h-screen bg-white dark:bg-primary text-primary dark:text-white px-4 py-10">
    <div class="max-w-screen-lg mx-auto">
      <h1 class="text-3xl lg:text-4xl font-bold text-center mb-8">Church Calendar</h1>
      <div class="w-full h-[800px] rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=sanantonioforchrist4%40gmail.com&ctz=America%2FChicago"
          style="border: 0"
          width="100%"
          height="100%"
          frameborder="0"
          scrolling="no">
        </iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
// Nothing needed here for now
</script>

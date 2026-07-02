<script setup lang="ts">

import AboutDescription from "@/components/sections/about/AboutDescription.vue";
</script>

<template>
  <div class="space-y-24 mx-auto px-16">
    <div class="about-image-container">
      <img src="/images/production-slider/slide-1.png" alt="" class="about-image h-[600px] aspect-video">
      <img src="/images/production-slider/slide-2.png" alt="" class="about-image h-[235px] aspect-square">
    </div>

    <AboutDescription/>
  </div>
</template>

<style scoped lang="postcss">

</style>
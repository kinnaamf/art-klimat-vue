<template>
  <div class="production-slider-mobile__container">
    <swiper
        :modules="modules"
        :slides-per-view="'auto'"
        :centered-slides="true"
        :space-between="16"
        :initial-slide="1"
        :free-mode="true"
        class="production-swiper"
    >
      <swiper-slide
          v-for="(slide, index) in slides"
          :key="index"
          class="production-slider-mobile__slide"
      >
        <img :src="slide.main" :alt="slide.alt" class="production-slider-mobile__image">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';

import 'swiper/css';

defineProps<{
  slides: { main: string; alt: string }[]
}>();

const modules = [Pagination];
</script>

<style scoped lang="postcss">
.production-swiper {
  width: 100%;
  height: 100%;
  padding: 0 calc((100vw - 85vw) / 2);
  overflow: visible !important;
}
</style>
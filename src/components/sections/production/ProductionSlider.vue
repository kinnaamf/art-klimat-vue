<script setup lang="ts">
import { useSlider } from "@/composables/useSlider.ts";
import IconChevron from "@/components/icons/IconChevron.vue";
import { ref } from "vue";
import { useSliderDrag } from "@/composables/useSliderDrag.ts";

defineProps<{
  slides: { main: string; alt: string }[]
}>()

const {
  current,
  nextIndex,
  next,
  prev,
} = useSlider()

const { sliderRef: mobileSliderRef, startDragging, drag, stopDragging } = useSliderDrag()

</script>

<template>
  <div class="production-slider__track">
    <!-- MOBILE -->
    <div class="production-slider-mobile__container"
         ref="mobileSliderRef"
         @mousedown="startDragging"
         @mousemove="drag"
         @mouseup="stopDragging"
         @mouseleave="stopDragging"
    >
      <div class="production-slider-mobile__content">
        <div class="production-slider-mobile__slide"
        v-for="(slide, index) in slides"
        >
          <img :src="slide.main" alt="" class="production-slider-mobile__image">
        </div>
        <div class="shrink-0 w-6"></div>
      </div>
    </div>
    
    <!-- DESKTOP -->
    <div class="production-slider">
      <div class="production-slider__main">
        <img
            :key="current"
            :src="slides[current].main"
            :alt="slides[current].alt"
            class="production-slider__image"
        >

        <div class="production-slider__controls">
          <div
              @click="prev"
              class="production-slider__button">
            <IconChevron/>
          </div>
          <div
              @click="next"
              class="production-slider__button rotate-180">
            <IconChevron/>
          </div>
        </div>
      </div>

      <img
          :src="slides[nextIndex].main"
          :alt="slides[nextIndex].alt"
          class="production-slider__thumbnail"
      >
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
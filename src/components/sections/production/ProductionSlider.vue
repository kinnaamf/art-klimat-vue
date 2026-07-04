<script setup lang="ts">
import { useSlider } from "@/composables/useSlider.ts";
import IconChevron from "@/components/icons/IconChevron.vue";
import { ref } from "vue";

defineProps<{
  slides: { main: string; alt: string }
}>()

const {
  current,
  nextIndex,
  next,
  prev,
} = useSlider()

</script>

<template>
  <div class="production-slider__track">
    <!-- MOBILE -->

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
.slider-track {
  overflow: hidden;
  padding: 0 7.5%;
  margin-top: 2rem;
}

.slider-inner {
  display: flex;
  gap: 1rem;
  transition: transform 0.5s ease;
}

.slider-slide {
  width: 85vw;
  height: 220px;
  flex-shrink: 0;
}
</style>
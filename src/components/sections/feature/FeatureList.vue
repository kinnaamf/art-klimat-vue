<script setup lang="ts">
import { type Feature } from "@/composables/useSlider.ts";
import FeatureItem from "@/components/sections/feature/FeatureItem.vue";
import { useSliderDrag } from "@/composables/useSliderDrag.ts";

defineProps<{
  featureData: Feature[]
}>()

const { sliderRef, startDragging, drag, stopDragging } = useSliderDrag()

</script>

<template>
  <div
      ref="sliderRef"
      @mousedown="startDragging"
      @mousemove="drag"
      @mouseup="stopDragging"
      @mouseleave="stopDragging"
      class="features__list"
  >
    <div v-for="feature in featureData">
      <FeatureItem :feature="feature"/>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
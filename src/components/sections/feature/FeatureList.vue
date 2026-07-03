<script setup lang="ts">
import { type Feature, useSlider } from "@/composables/useSlider.ts";
import FeatureItem from "@/components/sections/feature/FeatureItem.vue";

defineProps<{
  featureData: Feature[]
}>()

const {
  featuresRef,
  startDragging,
  drag,
  stopDragging,
} = useSlider()
</script>

<template>
  <div
      ref="featuresRef"
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
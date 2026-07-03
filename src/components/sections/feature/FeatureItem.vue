<script setup lang="ts">
import type { Feature } from "@/composables/useSlider.ts";

defineProps<{
  feature: Feature
}>()
</script>

<template>
  <div class="feature-card">
    <div class="feature-card__icon">
      <component :is="feature.icon" class="h-[220px]"/>
    </div>
    <div class="feature-card__content">
      <span class="h6">
        {{ feature.title }}
      </span>
      <span class="text-2">
        {{ feature.description }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
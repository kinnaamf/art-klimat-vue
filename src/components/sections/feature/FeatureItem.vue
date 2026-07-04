<script setup lang="ts">
import type { Feature } from "@/composables/useSlider.ts";

defineProps<{
  feature: Feature
}>()
</script>

<template>
  <div class="feature-card">
    <div class="feature-card__icon">
      <component :is="feature.icon" class="h-[200px] md:h-[220px]"/>
    </div>
    <div class="feature-card__content">
      <h6 class="h6">
        {{ feature.title }}
      </h6>
      <span class="text-2">
        {{ feature.description }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
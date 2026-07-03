<script setup lang="ts">
import type { Stat } from "@/composables/useStats.ts";

defineProps<{
  stat: Stat
}>()
</script>

<template>
  <div>
    <h2 class="about__item-title">{{ stat.title }}</h2>
    <span class="text-big">{{ stat.description }}</span>
  </div>
</template>

<style scoped lang="postcss">

</style>
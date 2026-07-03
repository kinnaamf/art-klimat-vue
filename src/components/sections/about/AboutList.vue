<script setup lang="ts">
import type { Stat } from "@/composables/useStats.ts";
import AboutItem from "@/components/sections/about/AboutItem.vue";

defineProps<{
  stats: Stat
}>()
</script>

<template>
<div class="about__list">
  <div v-for="stat in stats">
    <AboutItem :stat="stat"/>
  </div>
</div>
</template>

<style scoped lang="postcss">

</style>
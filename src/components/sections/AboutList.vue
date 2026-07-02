<script setup lang="ts">
import type { Stat } from "@/composables/useStats.ts";
import AboutItem from "@/components/sections/AboutItem.vue";

defineProps<{
  stats: Stat
}>()
</script>

<template>
<div class="grid grid-cols-3 gap-12">
  <div v-for="stat in stats">
    <AboutItem :stat="stat"/>
  </div>
</div>
</template>

<style scoped lang="postcss">

</style>
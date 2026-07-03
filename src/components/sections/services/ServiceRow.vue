<script setup lang="ts">

import ServiceCard from "@/components/sections/services/ServiceCard.vue";

defineProps<{
  cards: { title: string; type: string }[];
}>()
</script>

<template>
  <div class="service-row">
    <ServiceCard v-for="card in cards" :key="card.type" :card="card"/>
  </div>
</template>

<style scoped lang="postcss">

</style>
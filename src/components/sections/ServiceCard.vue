<script setup lang="ts">

defineProps<{
  card: { title: string, type: string }
}>()
</script>

<template>
  <div class="service-card">
    <h3 class="h3 service-title">
      {{ card.title }}
    </h3>

    <template v-if="card.type === 'planning'">
      <img src="/images/planning.png" alt="" class="img-planning"/>
    </template>

    <template v-else-if="card.type === 'production'">
      <div class="blur-overlay-top"></div>
      <div class="img-production "></div>
      <div class="blur-overlay-bottom "></div>
    </template>

    <template v-else-if="card.type === 'commissioning'" >
      <img src="/images/commissioning.png" alt="" class="img-commissioning" />
    </template>
  </div>
</template>

<style scoped lang="postcss">

</style>
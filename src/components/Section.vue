<script setup lang="ts">
defineProps<{
  background?: string;
}>()
</script>

<template>
  <section :style="{ backgroundColor: `${background}` }">
    <div class="container">
      <slot/>
    </div>
  </section>
</template>

<style scoped>
.container {
  @apply max-w-[1440px] mx-auto;
}
</style>
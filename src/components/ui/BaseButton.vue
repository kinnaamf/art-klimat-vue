<template>
  <button class="btn" :class="[ size, variant ]">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary'
  size?: 'md' | 'lg'
}>()
</script>

<style scoped lang="postcss">

</style>
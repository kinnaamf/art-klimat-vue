<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  background?: string;
  spacing?: string;
  fullWidth?: boolean;
  id: string;
}>()

const spacingClass = computed(() => {
  return {
    hero: '',
    md: 'py-16 md:py-24',
    lg: 'py-24 md:py-[128px]',
    alt: 'pb-16 pt-24 md:pb-[8rem]',
    product: 'pt-24 pb-16 md:pt-[8rem] md:pb-24',
    contact: ' md:pt-20 md:pb-[8rem]',
  }[props.spacing || 'md']
})
</script>

<template>
  <section :style="{ backgroundColor: `${background}` }"
           :class="spacingClass"
           :id="id"
  >
    <div :class="fullWidth ? '' : 'container'">
      <slot/>
    </div>
  </section>
</template>

<style scoped>
.container {
  @apply max-w-[1440px] mx-auto;
}
</style>
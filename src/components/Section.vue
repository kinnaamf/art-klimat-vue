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
    md: 'py-16 lg:py-24',
    lg: 'py-24 lg:py-[128px]',
    alt: 'pb-16 pt-24 lg:pb-[8rem]',
    product: 'pt-24 pb-16 lg:pt-[8rem] lg:pb-24',
    contact: 'pt-12 pb-16 lg:pt-20 lg:pb-[8rem]',
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
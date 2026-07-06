<script setup lang="ts">
import { useScroll } from "@/composables/useScroll.ts";

defineProps<{
  title: string
  links: { label: string; to: string }[]
}>()

const { scrollTo } = useScroll()
</script>

<template>
  <div class="footer-column">
    <h6 class="footer-column__title text-1-bold md:h6">{{ title }}</h6>

    <nav class="footer-column__nav">
      <a  v-for="link in links"
          :key="link.label"
          :to="link.to"
          :href="link.label"
          @click.prevent="scrollTo(link.to)"
          class="text-1 md:text-big footer-column__link"
      >
        {{ link.label }}
      </a>
    </nav>
  </div>
</template>

<style scoped lang="postcss">

</style>
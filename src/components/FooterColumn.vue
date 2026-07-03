<script setup lang="ts">
defineProps<{
  title: string
  links: { label: string; to: string }[]
}>()
</script>

<template>
  <div class="footer-column">
    <h6 class="footer-column__title h6">{{ title }}</h6>

    <nav class="footer-column__nav">
      <a  v-for="link in links"
          :key="link.label"
          :to="link.to"
          :href="link.label"
          class="text-big footer-column__link"
      >
        {{ link.label }}
      </a>
    </nav>
  </div>
</template>

<style scoped lang="postcss">

</style>
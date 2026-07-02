<script setup lang="ts">
defineProps<{
  title: string
  links: { label: string; to: string }[]
}>()
</script>

<template>
  <div class="text-xl">
    <h6 class="h6">{{ title }}</h6>

    <nav class="flex flex-col gap-4 mt-6 font-normal">
      <a  v-for="link in links"
          :key="link.label"
          :to="link.to"
          :href="link.label"
          class="text-big !text-white/60"
      >
        {{ link.label }}
      </a>
    </nav>
  </div>
</template>

<style scoped lang="postcss">

</style>
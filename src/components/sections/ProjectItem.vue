<script setup lang="ts">
import type { Project } from "@/composables/useProjects.ts";

defineProps<{
  project: Project
  imageClass: string
}>()
</script>

<template>
<div class="space-y-2">
  <div>
    <img :src="project.image" alt=""
         class=" w-full rounded-2xl object-cover"
        :class="imageClass" />
  </div>
  <div class="space-y-2 p-2">
    <h6 class="h6">{{ project.title }}</h6>
    <span class="text-big">{{ project.area }}</span>
    <span class="text-big" v-html="project.unit"></span>
  </div>
</div>
</template>

<style scoped lang="postcss">

</style>
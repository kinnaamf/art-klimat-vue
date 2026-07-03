<script setup lang="ts">
import type { Project } from "@/composables/useProjects.ts";

defineProps<{
  project: Project
  imageClass: string
}>()
</script>

<template>
  <div class="project-card">
    <div class="project-card__image-wrapper">
      <img :src="project.image" alt=""
           class="project-card__image"
           :class="imageClass"/>
    </div>
    <div class="project-card__content">
      <h6 class="h6">{{ project.title }}</h6>
      <span class="text-big">{{ project.area }}</span>
      <span class="text-big" v-html="project.unit"></span>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
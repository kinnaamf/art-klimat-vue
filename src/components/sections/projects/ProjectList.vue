<script setup lang="ts">
import type { Project } from "@/composables/useProjects.ts";
import ProjectItem from "@/components/sections/projects/ProjectItem.vue";

defineProps<{
  projects: Project[]
}>()
</script>

<template>
<div class="flex flex-col gap-12">
  <div class="grid grid-cols-3 gap-6">
    <div v-for="project in projects.slice(0, 3)" :key="project.id">
      <ProjectItem :project="project" imageClass="h-[316px]"/>
    </div>
  </div>
  <div class="grid grid-cols-4 gap-6">
    <div v-for="project in projects.slice(3)" :key="project.id">
      <ProjectItem :project="project" imageClass="h-[230px]" />
    </div>
  </div>
</div>
</template>

<style scoped lang="postcss">

</style>
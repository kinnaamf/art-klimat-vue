<script setup lang="ts">
import type { Project } from "@/composables/useProjects.ts";
import ProjectItem from "@/components/sections/projects/ProjectItem.vue";

defineProps<{
  projects: Project[]
}>()
</script>

<template>
  <div class="projects-list">
    <div class="projects-list__grid--primary">
      <div v-for="project in projects.slice(0, 3)" :key="project.id">
        <ProjectItem :project="project" imageClass="h-[316px]"/>
      </div>
    </div>
    <div class="">
      <div v-for="project in projects.slice(3)" :key="project.id">
        <ProjectItem :project="project" imageClass="h-[230px]"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
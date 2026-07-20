<script setup lang="ts">
import type { Project } from "@/composables/useProjects.ts";
import ProjectItem from "@/components/sections/projects/ProjectItem.vue";
import { useSliderDrag } from "@/composables/useSliderDrag.ts";

defineProps<{
  projects: Project[]
}>()

const { sliderRef, startDragging, drag, stopDragging } = useSliderDrag()
</script>

<template>
  <div class="projects-list"
       ref="sliderRef"
       @mousedown="startDragging"
       @mousemove="drag"
       @mouseup="stopDragging"
       @mouseleave="stopDragging"
  >
    <div class="projects-list__grid--primary">
      <div v-for="project in projects.slice(0, 3)" :key="project.id">
        <ProjectItem :project="project" imageClass="h-[316px]"/>
      </div>
    </div>
    <div class="projects-list__grid--secondary">
      <div v-for="project in projects.slice(3)" :key="project.id">
        <ProjectItem :project="project" imageClass="h-[230px]"/>
      </div>
    </div>
  </div>

  <div class="project-list-mobile__container">
    <div class="project-list-mobile__content">
      <div
          v-for="(project, idx) in projects"
          :key="idx"
          :class="{ 'pr-6': idx === projects.length - 1 }"
      >
        <ProjectItem :project="project" imageClass="h-[240px] w-[320px]"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
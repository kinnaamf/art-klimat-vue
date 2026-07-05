<script setup lang="ts">

import SectionTitle from "@/components/SectionTitle.vue";
import SectionDescription from "@/components/SectionDescription.vue";
import ProjectList from "@/components/sections/projects/ProjectList.vue";
import { useProjects } from "@/composables/useProjects.ts";
import BaseButton from "@/components/ui/BaseButton.vue";

const { projects } = useProjects();
</script>

<template>
  <div class="px-6 md:px-16">
    <div class="projects__container">
      <div class="projects__header">
        <SectionTitle>Реализованные <span class="text-orange">объекты</span></SectionTitle>
        <SectionDescription>
          Мы предлагаем качественные и надежные вентиляционные изделия по доступным ценам
        </SectionDescription>
      </div>
      <ProjectList :projects="projects"/>

      <div class="projects__actions">
        <BaseButton variant="primary" size="lg" class="!px-4 !py-3 md:!px-6 md:!py-[18px]">
          Посмотреть всё
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
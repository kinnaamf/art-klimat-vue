<script setup lang="ts">

import AppForm from "@/components/AppForm.vue";
</script>

<template>
  <div class="flex justify-between gap-6 border-t border-t-darkgray/10 pt-20">
    <div class="space-y-6">
      <h2 class="h1">
        Оставьте заявку, чтобы обсудить проект
      </h2>
      <p class="max-w-[480px] text-big">
        Проконсультируем, подберём оборудование, рассчитаем стоимость проекта
      </p>
    </div>
    <div>
      <AppForm :showHeader="false" theme="light" />
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
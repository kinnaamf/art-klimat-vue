<script setup lang="ts">
import AboutList from "@/components/sections/about/AboutList.vue";
import { useStats } from "@/composables/useStats.ts";

const { stats } = useStats();
</script>

<template>
  <div class="max-w-[800px] mx-auto space-y-12">
    <div>
      <h2 class="h2">
        Мы предлагаем качественные и надёжные вентиляционные изделия по доступным ценам
      </h2>
    </div>
    <div class="flex gap-16">
      <div class="flex flex-col gap-6">
        <span class="text-big">Также мы гарантируем качественное исполнение заказов в самые минимальные сроки</span>
        <span class="text-big">Если у вас имеются какие‑либо вопросы или пожелания, не стесняйтесь обращаться к нашим менеджерам</span>
      </div>
      <div>
        <span class="text-big">Они предоставят вам необходимую помощь и проконсультируют по любым вопросам, связанным с вентиляционной техникой</span>
      </div>
    </div>
    <div>
      <AboutList :stats="stats" />
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
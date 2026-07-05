<script setup lang="ts">
import AboutList from "@/components/sections/about/AboutList.vue";
import { useStats } from "@/composables/useStats.ts";

const { stats } = useStats();
</script>

<template>
  <div class="about__description-container">
    <div>
      <h2 class="h4 md:h2 !text-darkgray">
        Мы предлагаем качественные и надёжные вентиляционные изделия по доступным ценам
      </h2>
    </div>
    <div class="about__description-content">
      <div class="about__description-column">
        <span class="text-big !text-darkgray">Также мы гарантируем качественное исполнение заказов в самые минимальные сроки</span>
        <span class="text-big !text-darkgray">Если у вас имеются какие‑либо вопросы или пожелания, не стесняйтесь обращаться к нашим менеджерам</span>
      </div>
      <div>
        <span class="text-big !text-darkgray">Они предоставят вам необходимую помощь и проконсультируют по любым вопросам, связанным с вентиляционной техникой</span>
      </div>
    </div>
    <div>
      <AboutList :stats="stats" />
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
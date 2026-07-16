<script setup lang="ts">
import AboutList from "@/components/sections/about/AboutList.vue";
import { useStats } from "@/composables/useStats.ts";

const {stats} = useStats();
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
        <span class="text-big !text-darkgray">
          ООО «ИК «Арт Климат» — инжиниринговая компания полного цикла, выполняющая проектирование, производство,
          поставку, монтаж и сервисное сопровождение инженерных систем для коммерческих, промышленных,
          общественных и жилых объектов.
        </span>
        <span class="text-big !text-darkgray">
          Собственная производственная база и многолетний опыт позволяют выпускать стандартные и нестандартные решения,
          гарантируя высокое качество, соблюдение сроков и надежность инженерных систем
        </span>
      </div>
      <div>
        <span class="text-big !text-darkgray">Они предоставят вам необходимую помощь и проконсультируют по любым вопросам, связанным с вентиляционной техникой</span>
      </div>
    </div>
    <div>
      <AboutList :stats="stats"/>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
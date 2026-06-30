<script setup lang="ts">

import ProductionSlider from "@/components/sections/ProductionSlider.vue";
import { useSlider } from "@/composables/useSlider.ts";

const { slides } = useSlider()
</script>

<template>
  <div class="production-container">
    <div class="flex items-center gap-2.5 h-7 w-[430px] shrink-0">
      <div class="circle"></div>
      <span class="text-big text-darkgray/50">О компании</span>
    </div>
    <div class="space-y-12">
      <h1 class="h1">Производство</h1>
      <h2 class="h2">
        Наша компания предоставляет широкий ассортимент вентиляционных изделий, которые отличаются высоким качеством
        и надёжностью. Вы можете выбрать<br>из различных <span class="text-darkgray/40">моделей и размеров, подходящих для любых помещений и условий
        эксплуатации</span>
      </h2>
      <div class="production-stats-container">
        <div class="production-stat-item">
          <h3 class="stat-item-title">
            850 000 м²
          </h3>
          <p class="text-big text-darkgray/60">
            Произвели воздуховодов
          </p>
        </div>
        <div class="production-stat-item">
          <h3 class="stat-item-title">
            1 800 400
          </h3>
          <p class="text-big text-darkgray/60">
            Произвели деталей
          </p>
        </div>
      </div>
      <h4 class="h4">
        Мы гарантируем, что каждая продукция соответствует строгим стандартам и прослужит долго. При этом наши цены
        остаются доступными для всех клиентов. Вы можете выбрать из различных моделей и размеров, подходящих для любых
        помещений и условий эксплуатации
      </h4>

      <ProductionSlider :slides="slides"/>
    </div>

  </div>


</template>

<style scoped lang="postcss">

</style>
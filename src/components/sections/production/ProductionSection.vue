<script setup lang="ts">

import ProductionSlider from "@/components/sections/production/ProductionSlider.vue";
import { useSlider } from "@/composables/useSlider.ts";
import { useIntersection } from "@/composables/useIntersection.ts";
import { ref } from "vue";
import ProductionSliderMobile from "@/components/sections/production/ProductionSliderMobile.vue";

const { slides } = useSlider()

const trigger1 = ref<HTMLElement | null>(null);
const trigger2 = ref<HTMLElement | null>(null);
const trigger3 = ref<HTMLElement | null>(null);

const { isVisible: titleVisible } = useIntersection(trigger1);
const { isVisible: statsVisible } = useIntersection(trigger2);
const { isVisible: textVisible } = useIntersection(trigger3);

</script>

<template>
  <div>
    <div class="px-6 xl:px-16">
      <div class="production__container">
        <div class="flex items-center gap-2.5 h-7 shrink-0 w-[420px]">
          <div class="production__label-dot"></div>
          <span class="text-big text-darkgray/50">О компании</span>
        </div>
        <div class="production__content">
          <h1 class="h3 md:h1">Производство</h1>
          <h2 class="h4 !text-darkgray md:h2">
            Наша компания предоставляет широкий ассортимент вентиляционных изделий, которые отличаются высоким качеством
            и надёжностью. Вы можете выбрать<br>из различных
            <span
                ref="trigger1"
                class="production__subtitle-highlight production-trigger-1"
                :class="titleVisible ? 'text-darkgray' : 'text-darkgray/40'"
            >
            моделей и размеров, подходящих для любых помещений и условий
        эксплуатации</span>
          </h2>
          <div class="production__stats">
            <div class="production__stat-item">
              <h3
                  ref="trigger2"
                  class="stat-item-title production-trigger-2 production__stat-value"
                  :class="statsVisible ? 'text-orange' : 'text-orange/20'"
              >
                850 000 м²
              </h3>
              <p class="text-big text-darkgray/60">
                Произвели воздуховодов
              </p>
            </div>
            <div class="production__stat-item gap-2">
              <h3 ref="trigger2"
                  class="stat-item-title production-trigger-2 production__stat-value"
                  :class="statsVisible ? 'text-orange' : 'text-orange/20'"
              >
                1 800 400
              </h3>
              <p class="text-big text-darkgray/60">
                Произвели деталей
              </p>
            </div>
          </div>
          <h4 ref="trigger3"
              class="md:text-[2rem] md:font-medium md:leading-[40px]  h5 production-trigger-3 production__description"
              :class="textVisible ? '!text-darkgray' : '!text-darkgray/40'"
          >
            Мы гарантируем, что каждая продукция соответствует строгим стандартам и прослужит долго. При этом наши цены
            остаются доступными для всех клиентов. Вы можете выбрать из различных моделей и размеров, подходящих для любых
            помещений и условий эксплуатации
          </h4>

          <ProductionSlider :slides="slides"/>

        </div>
      </div>
    </div>
    <ProductionSliderMobile :slides="slides"/>
  </div>

</template>

<style scoped lang="postcss">

</style>
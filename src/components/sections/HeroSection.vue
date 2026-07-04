<template>
  <div class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="h1 !text-white">
          Полный цикл вентиляции<br>с собственным производством
        </h1>
        <span class="text-big !text-white/70">
          Лидер услуг от проекта до пусконаладки воздуховодов и фасонных изделий для инжиниринга<br>и строительства
        </span>
      </div>
      <div class="hero-actions">
        <BaseButton variant="primary" size="lg" @click="scrollTo('contact')">Оставить заявку</BaseButton>
        <BaseButton variant="secondary" size="lg">Наши услуги</BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">
import BaseButton from "@/components/ui/BaseButton.vue";
import { useScroll } from "@/composables/useScroll.ts";

const { scrollTo } = useScroll();
</script>
<script setup lang="ts">

import AppForm from "@/components/AppForm.vue";

</script>

<template>
  <div class="px-6 xl:px-16">
    <div class="contact__container">
      <div class="contact__content">
        <div class="contact__info">
          <h2 class="h3 md:h1">
            Оставьте заявку, чтобы обсудить проект
          </h2>
          <p class="contact__description text-big">
            Проконсультируем, подберём оборудование, рассчитаем стоимость проекта
          </p>
        </div>
        <div>
          <AppForm title="" :showHeader="false" theme="light" height="176px"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
<script setup lang="ts">

import SectionTitle from "@/components/SectionTitle.vue";
import AppForm from "@/components/AppForm.vue";
import ServiceContacts from "@/components/sections/services/ServiceContacts.vue";
import ServiceRow from "@/components/sections/services/ServiceRow.vue";

const rowOne = [
  { title: 'Проектирование', type: 'planning' },
  { title: 'Производство', type: 'production' },
]

const rowTwo = [
  { title: 'Монтаж', type: 'montage' },
  { title: 'Пусконаладка', type: 'commissioning' },
]
</script>

<template>
  <div class="px-6 xl:px-16">
    <SectionTitle>
      Полный цикл <span class="text-orange">услуг</span>
    </SectionTitle>

    <div class="services__grid mt-8 md:mt-12">
      <ServiceRow :cards="rowOne" class="services__row--top"/>
      <ServiceRow :cards="rowTwo" class="services__row--bottom"/>
      <AppForm title="Оставьте заявку" theme="dark"/>
      <ServiceContacts />
    </div>

  </div>
</template>

<style scoped>

</style>
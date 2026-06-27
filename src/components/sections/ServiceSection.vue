<script setup lang="ts">

import SectionTitle from "@/components/SectionTitle.vue";
import ServiceForm from "@/components/sections/ServiceForm.vue";
import ServiceContacts from "@/components/sections/ServiceContacts.vue";
import ServiceCard from "@/components/sections/ServiceCard.vue";
import ServiceRow from "@/components/sections/ServiceRow.vue";

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
  <div class="px-16">
    <SectionTitle>
      Полный цикл <span class="text-orange">услуг</span>
    </SectionTitle>

    <div class="services-grid mt-12">
      <ServiceRow :cards="rowOne" class="grid-one"/>
      <ServiceRow :cards="rowTwo" class="grid-two"/>
      <ServiceForm />
      <ServiceContacts />
    </div>

  </div>
</template>

<style scoped>

</style>
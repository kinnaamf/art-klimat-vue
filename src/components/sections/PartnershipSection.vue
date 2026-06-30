<script setup lang="ts">

import SectionTitle from "@/components/SectionTitle.vue";

const partnershipList = [
  {
    title: 'Строительные компании',
    count: 85,
    description: 'Мы предлагаем качественные и надежные вентиляционные изделия по доступным ценам',
  },
  {
    title: 'Инжиниринговые компании',
    count: 47,
    description: 'Мы предлагаем качественные и надежные вентиляционные изделия по доступным ценам',
  },
  {
    title: 'Монтажные организации',
    count: 65,
    description: 'Мы предлагаем качественные и надежные вентиляционные изделия по доступным ценам',
  },
]
</script>

<template>
  <div>
    <SectionTitle class="px-16">Сферы для <span class="text-orange">сотрудничества</span></SectionTitle>

    <div class="mt-12">
      <div
          v-for="(item, idx) in partnershipList"
          class="border-t border-darkgray/10 py-10"
          :class="idx === partnershipList.length - 1 ? 'border' : ''"
      >
        <div class="flex justify-between gap-8 px-16">
          <div class="flex items-start gap-4">
            <h2 class="h2">{{ item.title }}</h2>
            <span class="text-1">{{ item.count }} проектов</span>
          </div>
          <span class="text-big max-w-[480px]">{{ item.description }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
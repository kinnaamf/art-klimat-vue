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
    <div class="max-w-[1440px] mx-auto px-16">
      <SectionTitle>
        Сферы для <span class="text-orange">сотрудничества</span>
      </SectionTitle>
    </div>

    <div class="mt-12">
      <div
          v-for="(item, idx) in partnershipList"
          :key="item.title"
          class="border-t border-darkgray/10"
          :class="idx === partnershipList.length - 1 ? 'border-b' : ''"
      >
        <div class="max-w-[1440px] mx-auto py-10 px-16">
          <div class="flex justify-between gap-8">
            <div class="flex items-start gap-4">
              <h2 class="h2">{{ item.title }}</h2>
              <span class="text-1">{{ item.count }} проектов</span>
            </div>

            <span class="text-big max-w-[480px]">
              {{ item.description }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
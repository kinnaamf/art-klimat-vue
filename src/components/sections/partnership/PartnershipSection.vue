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
    <div class="partnership__container">
      <SectionTitle>
        Сферы для <span class="text-orange">сотрудничества</span>
      </SectionTitle>
    </div>

    <div class="partnership__list">
      <div
          v-for="(item, idx) in partnershipList"
          :key="item.title"
          class="partnership__item"
          :class="idx === partnershipList.length - 1 ? 'partnership__item-last' : ''"
      >
        <div class="partnership__item-container">
          <div class="partnership__content">
            <div class="partnership__heading">
              <h2 class="h2">{{ item.title }}</h2>
              <span class="text-1">{{ item.count }} проектов</span>
            </div>

            <span class="text-big partnership__description">{{ item.description }}
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
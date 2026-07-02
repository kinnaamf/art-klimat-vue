<script setup lang="ts">

import FooterColumn from "@/components/FooterColumn.vue";

const services = [
  { label: 'Проектирование', to: '/' },
  { label: 'Производство', to: '/' },
  { label: 'Монтаж', to: '/' },
  { label: 'Пусконаладка', to: '/' },
]

const products = [
  { label: 'Воздуховоды', to: '/' },
  { label: 'Круглые фасонные части', to: '/' },
  { label: 'Прямоугольные фасонные части', to: '/' },
  { label: 'Элементы систем вентиляции', to: '/' },
  { label: 'Нестандартные изделия', to: '/' },
]

const menu = [
  { label: 'Производство', to: '/' },
  { label: 'Объекты', to: '/' },
  { label: 'О компании', to: '/' },
  { label: 'Контакты', to: '/' },
]

</script>

<template>
<div class="bg-[#1f1e1e]">
  <div class="max-w-[1440px] mx-auto text-white px-16 pt-16 pb-12">
    <div class="flex justify-between gap-12">
      <div>
        <div class="flex items-center gap-6">
          <img src="/images/logo.png" alt="" class="w-14 h-14">
          <h3 class="text-white text-[28px] font-medium leading-8">Арт-Климат</h3>
        </div>
        <div class="space-y-6 mt-10">
          <div class="grid grid-cols-2 gap-x-8 gap-y-4">
            <span class="text-1-bold">Telegram</span>
            <span class="text-1-bold">WhatsApp</span>
            <span class="text-1-bold">+7 967 533-67-77</span>
            <span class="text-1-bold">info@ventzakaz.ru</span>
          </div>
          <div>
            <h5 class="text-2 text-white/60">Где мы находимся</h5>
            <h4 class="text-1-bold mt-px">
              Ленинградская область, посёлок Бугры,<br>
              улица Шоссейная, 33б литера А, помещение 21, 22
            </h4>
            <h5 class="text-1 text-white/60 mt-6">Пн - пт: 09:00 - 19:00 • Сб, вс - выходные дни</h5>
          </div>
        </div>
      </div>
      <div class="flex gap-24">
        <FooterColumn title="Услуги" :links="services"/>
        <FooterColumn title="Продукция" :links="products"/>
        <FooterColumn title="Меню" :links="menu"/>
      </div>
    </div>
    <div class="h-px bg-white/10 my-12"></div>
    <div class="flex gap-4">
      <a href="" class="text-1 text-left !text-white/60 w-1/3">Политика конфиденциальности</a>
      <span class="text-1 text-center !text-white/60 w-1/3">© 2026 «Арт-Климат». Все права защищены</span>
      <span class="text-1 text-right !text-white/60 w-1/3">UX/UI дизайн от UxPRO</span>
    </div>
  </div>
</div>
</template>

<style scoped lang="postcss">

</style>
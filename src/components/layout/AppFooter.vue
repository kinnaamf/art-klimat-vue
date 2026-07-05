<script setup lang="ts">

import FooterColumn from "@/components/FooterColumn.vue";

import { useFooter } from "@/composables/useFooter.ts";

const {
  services,
  products,
  menu,
} = useFooter()

</script>

<template>
  <div class="footer__container">
    <div class="footer__content">
      <div>
        <div class="footer__brand">
          <img src="/images/logo.png" alt="" class="w-14 h-14">
          <h3 class="">Арт-Климат</h3>
        </div>
        <div class="footer__info">
          <div class="footer__contacts">
            <div class="footer__contacts--item">
              <h3 class="w-[8rem]">Telegram</h3>
              <h3 class="w-[8rem]">WhatsApp</h3>
            </div>
            <div class="footer__contacts--item">
              <h3>+7 967 533-67-77</h3>
              <h3>info@ventzakaz.ru</h3>
            </div>
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
      <div class="footer__navigation">
        <FooterColumn title="Услуги" :links="services"/>
        <FooterColumn title="Продукция" :links="products"/>
        <FooterColumn title="Меню" :links="menu"/>
      </div>
    </div>
    <div class="footer__divider"></div>
    <div class="footer__bottom">
      <a href="" class="text-1 md:text-left !text-white/60 md:w-1/3">Политика конфиденциальности</a>
      <span class="text-1 md:text-center !text-white/60 md:w-1/3">© 2026 «Арт-Климат». Все права защищены</span>
      <span class="text-1 md:text-right !text-white/60 md:w-1/3">UX/UI дизайн от <a href="" class="text-white">UxPRO</a></span>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
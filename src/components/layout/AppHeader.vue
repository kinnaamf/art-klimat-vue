<script setup lang="ts">
import IconTelegram from "@/components/icons/IconTelegram.vue";
import IconWhatsApp from "@/components/icons/IconWhatsApp.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import { useHeader } from "@/composables/useHeader.ts";

const {
  links,
  activeLink,
  scrollTo,
  lightClass,
  darkClass,
  isPastHero
} = useHeader()
</script>

<template>
  <div class="header__container">
    <div
        :class="isPastHero ? darkClass : lightClass"
        class="header__nav-wrapper">
      <img src="/images/logo.png" alt="" class="header__logo">
      <nav class="header__nav">
        <ul class="header__menu">
          <li
              v-for="link in links"
              :key="link.id"
              @click.prevent="activeLink = link.id; scrollTo(link.to)"
              :class="{ 'active': activeLink === link.id }"
              class="header__menu-item text-1"
          >
            <a>{{ link.title }}</a>
          </li>
          <li class="text-1 header__search">
            <IconSearch/>
            Поиск
          </li>
        </ul>
      </nav>
    </div>
    <div
        class="header__actions"
        :class="isPastHero ? darkClass : lightClass">
      <div class="header__social"
           :class="isPastHero ? darkClass : lightClass">
        <IconTelegram/>
      </div>
      <div class="header__social"
           :class="isPastHero ? darkClass : lightClass">
        <IconWhatsApp/>
      </div>
      <BaseButton variant="primary" size="md">Оставьте заявку</BaseButton>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.active {
  color: white !important;
}
</style>
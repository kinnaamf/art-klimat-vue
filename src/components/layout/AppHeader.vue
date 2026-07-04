<script setup lang="ts">
import IconTelegram from "@/components/icons/IconTelegram.vue";
import IconWhatsApp from "@/components/icons/IconWhatsApp.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import { useHeader } from "@/composables/useHeader.ts";
import IconMenu from "@/components/icons/IconMenu.vue";

import { ref } from "vue";
import AppNavbar from "@/components/AppNavbar.vue";
import AppMenu from "@/components/AppMenu.vue";

const {
  lightClass,
  darkClass,
  isPastHero
} = useHeader()

const isMenuOpen = ref<boolean>(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value

  document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
}
</script>

<template>
  <div class="header__container">
    <div
        class="header__nav-wrapper"
        :class="isPastHero ? darkClass : lightClass"
    >
      <a href="/">
        <img src="/images/logo.png" alt="" class="header__logo">
      </a>

      <AppNavbar/>

    </div>
    <div
        class="header__actions"
        :class="isPastHero ? darkClass : lightClass">
      <div class="header__social">
        <IconTelegram/>
      </div>
      <div class="header__social">
        <IconWhatsApp/>
      </div>
      <div class="header__social header__burger"
           @click="toggleMenu"
      >
        <IconMenu />
      </div>
      <BaseButton variant="primary" size="md" class="header__action">Оставьте заявку</BaseButton>
    </div>
  </div>

  <Transition name="menu">
    <AppMenu v-if="isMenuOpen" @closeMenu="toggleMenu"/>
  </Transition>
</template>

<style scoped lang="postcss">
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
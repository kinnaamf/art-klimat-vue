<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
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
  <div class="flex gap-[10px]">
    <div
        :class="isPastHero ? darkClass : lightClass"
        class="flex items-center gap-6 py-1 pl-1 rounded-2xl shrink-0 transition-all duration-200">
      <img src="/images/logo.png" alt="" class="w-12 h-12">
      <nav class="mr-6">
        <ul class="flex items-center gap-6">
          <li
              v-for="link in links"
              :key="link.id"
              @click.prevent="activeLink = link.id; scrollTo(link.to)"
              :class="{ 'active': activeLink === link.id }"
              class="text-1 text-white/70 text-nowrap cursor-pointer"
          >
            <a>{{ link.title }}</a>
          </li>
          <li class="text-1 text-white/70 flex items-center gap-2">
            <IconSearch/>
            Поиск
          </li>
        </ul>
      </nav>
    </div>
    <div
        class="flex items-center gap-1 p-1 rounded-2xl shrink-0 transition-all duration-200"
        :class="isPastHero ? darkClass : lightClass">
      <div class="flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-200"
           :class="isPastHero ? darkClass : lightClass">
        <IconTelegram/>
      </div>
      <div class="flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-200"
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
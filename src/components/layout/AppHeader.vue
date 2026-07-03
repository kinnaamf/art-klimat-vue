<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import IconTelegram from "@/components/icons/IconTelegram.vue";
import IconWhatsApp from "@/components/icons/IconWhatsApp.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import IconSearch from "@/components/icons/IconSearch.vue";

const links = [
  {
    id: 1,
    title: 'Главная',
    to: '/'
  },
  {
    id: 2,
    title: 'Продукция',
    to: '/'
  },
  {
    id: 3,
    title: 'Услуги',
    to: '/'
  },
  {
    id: 4,
    title: 'Производство',
    to: '/'
  },
  {
    id: 5,
    title: 'Объекты',
    to: '/'
  },
  {
    id: 6,
    title: 'О компании',
    to: '/'
  },
  {
    id: 7,
    title: 'Контакты',
    to: '/'
  },
]

const activeLink = ref(1)

const lightClass = computed(() => {
  return 'bg-white/10'
})

const darkClass = computed(() => {
  return 'bg-darkgray/90'
})

const isPastHero = ref<boolean>(false);

onMounted(() => {
  const hero = document.querySelector('.hero');

  if (!hero) return

  const observer = new IntersectionObserver(
      ([entry]) => {
        isPastHero.value = !entry.isIntersecting
      },
      {threshold: 0, rootMargin: '-60px 0px 0px 0px'}
  )
  observer.observe(hero);
})
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
              @click.prevent="activeLink = link.id"
              :class="{ 'active': activeLink === link.id }"
              class="text-1 text-white/70 text-nowrap"
          >
            <a :href="`#${ link.to }`">{{ link.title }}</a>
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
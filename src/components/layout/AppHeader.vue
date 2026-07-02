<script setup lang="ts">
import { computed, ref } from "vue";
import IconTelegram from "@/components/icons/IconTelegram.vue";
import IconWhatsApp from "@/components/icons/IconWhatsApp.vue";
import BaseButton from "@/components/ui/BaseButton.vue";

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
  return 'bg-darkgray/10'
})
</script>

<template>
  <div class="fixed top-6 left-1/2 -translate-x-1/2 z-[100]">
    <div class="flex justify-between items-center gap-[10px]">
      <div
          :class="lightClass"
          class=" backdrop-blur-sm rounded-2xl py-1 pl-1 pr-6 flex items-center gap-6 text-1 !text-white/70">
        <img src="/images/logo.png" alt="" class="w-12 h-12">
        <nav>
          <ul class="flex gap-6">
            <li v-for="link in links"
                :class="{ active: activeLink === link.id }"
                @click.prevent="activeLink = link.id"
            >
              <a :href="`#${link.to}`">
                {{ link.title }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div :class="lightClass"
          class="p-1 flex gap-1 items-center backdrop-blur-sm rounded-2xl">
        <div :class="lightClass"
            class="w-12 h-12 flex items-center justify-center rounded-2xl shrink-0">
          <IconTelegram/>
        </div>
        <div :class="lightClass"
            class="w-12 h-12 flex items-center justify-center rounded-2xl shrink-0">
          <IconWhatsApp/>
        </div>
        <BaseButton variant="primary" size="md" class="text-nowrap">Оставить заявку</BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.active {
  color: white;
}
</style>
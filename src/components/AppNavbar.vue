<template>
  <nav class="header__nav">
    <ul class="header__menu">
      <li
          v-for="link in links"
          :key="link.id"
          @click.prevent="activeLink = link.id; scrollTo(link.to); $emit('linkClick')"
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
</template>

<script setup lang="ts">

import IconSearch from "@/components/icons/IconSearch.vue";
import { useHeader } from "@/composables/useHeader.ts";
import { useScroll } from "@/composables/useScroll.ts";

const {
  links,
  activeLink,
} = useHeader()

const { scrollTo } = useScroll()

const emits = defineEmits<{
  linkClick: []
}>()
</script>

<style scoped lang="postcss">

</style>
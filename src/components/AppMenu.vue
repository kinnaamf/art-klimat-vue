<template>
<div class="menu__container">
  <div class="space-y-8">
    <div class="menu__close--container">
      <div class="menu__close--content">
        <button class="menu__close-btn" @click="$emit('closeMenu')">
          <IconClose />
        </button>
      </div>
    </div>

    <AppNavbar class="menu__nav" @linkClick="$emit('closeMenu')"/>
  </div>

  <BaseButton
      variant="primary"
      size="lg"
      class="w-full"
      @click="scrollTo('contact'); $emit('closeMenu')">
    Оставить заявку
  </BaseButton>
</div>
</template>

<script setup lang="ts">

import AppNavbar from "@/components/AppNavbar.vue";
import IconClose from "@/components/icons/IconClose.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import { useScroll } from "@/composables/useScroll.ts";

const emits = defineEmits<{
  closeMenu: []
}>()

const { scrollTo } = useScroll()
</script>

<style scoped lang="postcss">

</style>
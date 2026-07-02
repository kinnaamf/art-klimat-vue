<script setup lang="ts">
import { useSlider } from "@/composables/useSlider.ts";
import IconChevron from "@/components/icons/IconChevron.vue";

defineProps<{
  slides: { main: string; alt: string }
}>()

const {
  current,
  nextIndex,
  next,
  prev,
} = useSlider()
</script>

<template>
  <div class="relative w-full flex gap-6 mt-16">
    <div class="relative rounded-2xl overflow-hidden">
      <img
          :key="current"
          :src="slides[current].main"
          :alt="slides[current].alt"
          class="w-[650px] h-[365px] object-cover"
      >

      <div class="absolute bottom-12 left-12 flex gap-3">
        <div
            @click="prev"
            class="bg-white h-16 w-16 flex items-center justify-center rounded-full cursor-pointer">
          <IconChevron/>
        </div>
        <div
            @click="next"
            class="bg-white h-16 w-16 flex items-center justify-center rounded-full cursor-pointer rotate-180">
          <IconChevron/>
        </div>
      </div>
    </div>

    <img
        :src="slides[nextIndex].main"
        :alt="slides[nextIndex].alt"
        class="self-start w-[185px] h-[185px] object-cover aspect-square rounded-2xl"
      >
  </div>
</template>

<style scoped lang="postcss">

</style>
<script setup lang="ts">
import type { Stat } from "@/composables/useStats.ts";
import { useIntersection } from "@/composables/useIntersection.ts";
import { ref } from "vue";

defineProps<{
  stat: Stat
}>()

const trigger = ref<HTMLElement | null>(null);

const { isVisible: statsVisible } = useIntersection(trigger);
</script>

<template>
  <div ref="trigger">
    <h2
        class="about__item-title"
        :class="statsVisible ? 'text-orange' : 'text-orange/20'"
    >{{ stat.title }}</h2>
    <span class="text-big">{{ stat.description }}</span>
  </div>
</template>

<style scoped lang="postcss">

</style>
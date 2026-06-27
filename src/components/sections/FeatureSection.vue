<script setup lang="ts">

import SectionTitle from "@/components/SectionTitle.vue";
import FeatureList from "@/components/sections/FeatureList.vue";
import { useSlider } from "@/composables/useSlider.ts";

const { featureData } = useSlider();
</script>

<template>
  <div class="overflow-hidden">
    <div class="max-w-[1440px] mx-auto px-16">
      <SectionTitle>
        Наши <span class="text-orange">преимущества</span>
      </SectionTitle>
    </div>
    <FeatureList :featureData="featureData"/>
  </div>
</template>

<style scoped lang="postcss">

</style>
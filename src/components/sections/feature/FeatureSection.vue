<script setup lang="ts">

import SectionTitle from "@/components/SectionTitle.vue";
import FeatureList from "@/components/sections/feature/FeatureList.vue";
import { useSlider } from "@/composables/useSlider.ts";

const { featureData } = useSlider();
</script>

<template>
  <div class="overflow-hidden">
    <div class="features__container">
      <SectionTitle>
        Наши <span class="text-orange">преимущества</span>
      </SectionTitle>

      <FeatureList :featureData="featureData"/>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
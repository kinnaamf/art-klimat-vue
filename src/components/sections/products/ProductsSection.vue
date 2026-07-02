<script setup lang="ts">

import SectionTitle from "@/components/SectionTitle.vue";
import SectionDescription from "@/components/SectionDescription.vue";
import ProductsList from "@/components/sections/products/ProductsList.vue";
import { useProducts } from "@/composables/useProducts.ts";
import BaseButton from "@/components/ui/BaseButton.vue";

const { products } = useProducts();
</script>

<template>
  <div class="px-16">
    <div class="space-y-12">
      <div class="flex flex-col gap-4">
        <SectionTitle>Наша <span class="text-orange">продукция</span></SectionTitle>
        <SectionDescription>Мы предлагаем качественные и надежные вентиляционные изделия по доступным ценам
        </SectionDescription>
      </div>

      <ProductsList :products="products"/>

      <div class="flex justify-center">
        <BaseButton variant="primary" size="lg">Посмотреть ещё</BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
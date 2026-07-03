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
    <div class="products__container">
      <div class="products__header">
        <SectionTitle>Наша <span class="text-orange">продукция</span></SectionTitle>
        <SectionDescription>Мы предлагаем качественные и надежные вентиляционные изделия по доступным ценам
        </SectionDescription>
      </div>

      <ProductsList :products="products"/>

      <div class="products__action">
        <BaseButton variant="primary" size="lg">Посмотреть ещё</BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
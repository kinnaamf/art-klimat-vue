<script setup lang="ts">
import type { Product } from "@/composables/useProducts.ts";
import ProductItem from "@/components/sections/products/ProductItem.vue";

defineProps<{
  products: Product[];
}>()
</script>

<template>
<div class="products__list">
  <div v-for="product in products">
    <ProductItem :product="product" />
  </div>
</div>
</template>

<style scoped lang="postcss">

</style>
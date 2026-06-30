<script setup lang="ts">
import type { Product } from "@/composables/useProducts.ts";

defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="product-item">
    <img :src="product.image" alt="" class="h-[330px] w-[250px]">

    <div class="product-text-container">
      <h6 class="h6 whitespace-pre-line mt-2">{{ product.name }}</h6>
      <span class="text-1 mt-1">{{ product.count }} позиций, от {{ product.price }} ₽</span>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
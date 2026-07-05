<script setup lang="ts">
import type { Product } from "@/composables/useProducts.ts";

defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="product-card">
    <img
        :src="product.image"
        alt=""
        class="product-card__image">

    <div class="product-card__content">
      <h6 class="product-card__title h6">{{ product.name }}</h6>
      <span class="product-card__meta text-1">{{ product.count }} позиций, от {{ product.price }} ₽</span>
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>
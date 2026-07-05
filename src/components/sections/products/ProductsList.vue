<script setup lang="ts">
import type { Product } from "@/composables/useProducts.ts";
import ProductItem from "@/components/sections/products/ProductItem.vue";
import { useSliderDrag } from "@/composables/useSliderDrag.ts";

defineProps<{
  products: Product[];
}>()

const { sliderRef, startDragging, drag, stopDragging } = useSliderDrag()
</script>

<template>
  <div
      ref="sliderRef"
      @mousedown="startDragging"
      @mousemove="drag"
      @mouseup="stopDragging"
      @mouseleave="stopDragging"
      class="products__list"
  >
    <div v-for="product in products" :key="product.id">
      <ProductItem :product="product" />
    </div>
  </div>
</template>
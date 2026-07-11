<template>
  <div>
    <input type="file" id="file" class="sr-only" @change="handleFile"/>
    <label for="file"
           class="rounded-2xl h-full flex  md items-center gap-2 cursor-pointer max-w-[240px]"
           :class="theme === 'dark'
                              ? 'secondary'
                              : 'text-darkgray border border-gray-300'">
      <IconPaperclip :class="theme === 'dark' ? 'stroke-white' : 'stroke-darkgray'"/>
      <span>{{ file ? file.name : 'Прикрепить файл' }}</span>
      <button v-if="file" @click.stop.prevent="clearFile">✕</button>
    </label>
  </div>
</template>

<script setup lang="ts">

import IconPaperclip from "@/components/icons/IconPaperclip.vue";

import { useFile } from "@/composables/useFile.ts";

const props = defineProps<{
  theme: string;
}>()

const {
  file,
  handleFile,
  clearFile
} = useFile()
</script>

<style scoped lang="postcss">

</style>
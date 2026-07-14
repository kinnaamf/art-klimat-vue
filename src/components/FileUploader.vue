<template>
  <input type="file" :id="inputId" class="sr-only" @change="emit('change', $event)"/>
  <label :for="inputId"
         class="app-form__file-input"
         :class="theme === 'dark'
                              ? 'secondary'
                              : 'text-darkgray border border-gray-300'">
    <IconPaperclip :class="theme === 'dark' ? 'stroke-white' : 'stroke-darkgray'"/>
    <span>{{ file ? file.name : 'Прикрепить файл' }}</span>
    <button v-if="file" @click.stop.prevent="emit('clear')">✕</button>
  </label>
</template>

<script setup lang="ts">

import IconPaperclip from "@/components/icons/IconPaperclip.vue";
import { useId } from "vue"
import { useFile } from "@/composables/useFile.ts";

defineProps<{
  theme: string;
  file: File | null;
}>()

const emit = defineEmits(['change', 'clear'])

const inputId = useId();

const {
  file
} = useFile()
</script>

<style scoped lang="postcss">

</style>
<script setup lang="ts">
import { reactive, ref } from "vue";
import IconCheck from "@/components/icons/IconCheck.vue";
import BaseButton from "@/components/ui/BaseButton.vue";

const props = withDefaults(defineProps<{
  showHeader?: boolean
  title: string
  description?: string
  theme?: 'dark' | 'light' | null
}>(), {
  showHeader: true,
  title: 'Оставьте заявку',
  description: 'Заполните форму, и наши специалисты свяжутся с вами в ближайшее время',
  theme: "dark",
})

const emit = defineEmits<{
  submit: [payload: { name: string; phoneNumber: string; comment: string }]
}>()

const formFields = reactive({
  name: "",
  phoneNumber: "",
  comment: ""
})

const isChecked = ref<boolean>(false);
const showConsentError = ref<boolean>(false);

const handleSubmit = () => {
  if (!isChecked.value) {
    showConsentError.value = true;
    return;
  }
  showConsentError.value = false;
  emit('submit', { ...formFields });
}
</script>

<template>
  <div :class="theme === 'dark' ? 'app-form-dark' : 'app-form-light'">
    <form class="space-y-8" @submit.prevent="handleSubmit">
      <div v-if="showHeader" class="space-y-4">
        <h3 class="h3">{{ props.title }}</h3>
        <span class="text-1 text-white">{{ props.description }}</span>
      </div>

      <div class="flex flex-col gap-4">
        <div class="flex gap-4">
          <input
              v-model="formFields.name"
              type="text"
              name="name"
              placeholder="Имя"
              class="text-big app-form-input"
              :class="theme === 'dark' ? 'app-form-input-dark' : 'app-form-input-light'"
              required
          />
          <input
              v-model="formFields.phoneNumber"
              type="tel"
              name="phoneNumber"
              placeholder="Номер телефона"
              class="text-big app-form-input"
              :class="theme === 'dark' ? 'app-form-input-dark' : 'app-form-input-light'"
              required
          />
        </div>

        <textarea
            v-model="formFields.comment"
            name="comment"
            placeholder="Комментарий"
            class="text-big app-form-textarea"
            :class="theme === 'dark' ? 'app-form-textarea-dark' : 'app-form-textarea-light'"
        />
      </div>

      <div>
        <label for="checkbox" class="flex items-start gap-4 cursor-pointer">
          <input
              id="checkbox"
              v-model="isChecked"
              type="checkbox"
              name="checkbox"
              hidden
          >
          <div
              class="w-6 h-6 rounded-[6px] flex items-center justify-center shrink-0"
              :class="isChecked ? 'bg-orange' : 'bg-white'"
          >
            <IconCheck v-if="isChecked" />
          </div>

          <span :class="theme === 'dark' ? 'text-white' : 'text-darkgray'" class="text-big">
            Я ознакомлен(а) с
            <a class="text-orange" href="#">Политикой конфиденциальности</a>
            и даю согласие <br>
            на обработку
            <a class="text-orange" href="#">персональных данных</a>
          </span>
        </label>
        <p v-if="showConsentError" class="text-red-500 text-sm mt-2">
          Необходимо согласие на обработку персональных данных
        </p>
      </div>

      <BaseButton type="submit" variant="primary" size="lg">Оставить заявку</BaseButton>
    </form>
  </div>
</template>

<style scoped lang="postcss">

</style>
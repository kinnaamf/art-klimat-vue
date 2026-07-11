<script setup lang="ts">
import { reactive, ref, useId } from "vue";
import IconCheck from "@/components/icons/IconCheck.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import FileUploader from "@/components/FileUploader.vue";
import { useFile } from "@/composables/useFile.ts";
import { vMaska } from 'maska/vue'

const props = withDefaults(defineProps<{
  showHeader?: boolean
  title: string
  description?: string
  theme?: "dark" | "light" | null
  height?: string
}>(), {
  showHeader: true,
  title: "Оставьте заявку",
  description: "Заполните форму, и наши специалисты свяжутся с вами в ближайшее время",
  theme: "dark",
  height: "120px",
});

const { error } = useFile()

const emit = defineEmits<{
  submit: [payload: { name: string; phoneNumber: string; comment: string }]
}>();

const formFields = reactive({
  name: "",
  phoneNumber: "",
  comment: "",
});

const isChecked = ref(false);
const showConsentError = ref(false);
const checkboxId = useId();

const handleSubmit = () => {
  if (!isChecked.value) {
    showConsentError.value = true;
    return;
  }

  if (error.value) {

  }

  showConsentError.value = false;
  emit("submit", { ...formFields });
};
</script>

<template>
  <div
      class="app-form"
      :class="theme === 'dark'
      ? 'app-form--dark'
      : 'app-form--light'"
  >
    <form
        class="app-form__form"
        @submit.prevent="handleSubmit"
    >
      <div
          v-if="showHeader"
          class="app-form__header"
      >
        <h3 class="app-form__title h4 !text-white md:h3">
          {{ props.title }}
        </h3>

        <span class="app-form__description text-1">
          {{ props.description }}
        </span>
      </div>

      <div class="app-form__fields">
        <div class="app-form__row">
          <input
              v-model="formFields.name"
              type="text"
              name="name"
              placeholder="Имя"
              class="app-form__input text-big"
              :class="theme === 'dark'
              ? 'app-form__input--dark !text-white'
              : 'app-form__input--light !text-darkgray'"
              required
          />

          <input
              v-model="formFields.phoneNumber"
              v-maska="'+7 (###) ### ## ##'"
              type="tel"
              name="phoneNumber"
              placeholder="Номер телефона"
              class="app-form__input text-big"
              :class="theme === 'dark'
              ? 'app-form__input--dark !text-white'
              : 'app-form__input--light !text-darkgray'"
              required
          />
        </div>

        <textarea
            v-model="formFields.comment"
            name="comment"
            placeholder="Комментарий"
            class="app-form__textarea text-big"
            :class="theme === 'dark'
            ? 'app-form__textarea--dark !text-white'
            : 'app-form__textarea--light !text-darkgray'"
            :style="{ height: props.height }"
        />
      </div>

      <div class="app-form__consent-wrapper">
        <label
            :for="checkboxId"
            class="app-form__consent"
        >
          <input
              :id="checkboxId"
              v-model="isChecked"
              type="checkbox"
              class="sr-only"
          >

          <div
              class="app-form__checkbox"
              :class="isChecked ? 'app-form__checkbox--checked' : 'border border-darkgray/10'"
          >
            <IconCheck v-if="isChecked" />
          </div>

          <span
              class="app-form__consent-text text-big"
              :class="theme === 'dark'
              ? 'text-white'
              : 'text-darkgray'"
          >
            Я ознакомлен(а) с
            <a
                href="#"
                class="app-form__link"
            >
              Политикой конфиденциальности
            </a>
            и даю согласие <br>
            на обработку
            <a
                href="#"
                class="app-form__link"
            >
              персональных данных
            </a>
          </span>
        </label>

        <p
            v-if="showConsentError"
            class="app-form__error"
        >
          Необходимо согласие на обработку персональных данных
        </p>
      </div>

      <div class="flex flex-col gap-2 sm:flex-row sm:gap-4">
        <BaseButton
            type="submit"
            variant="primary"
            size="lg"
            class="app-form__submit"
        >
          Оставить заявку
        </BaseButton>
        <FileUploader :theme="props.theme" />
      </div>
      <Transition name="expand">
        <p v-if="error" class="app-form__error">{{ error }}</p>
      </Transition>
    </form>
  </div>
</template>

<style scoped lang="postcss">
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 50px;
}
</style>


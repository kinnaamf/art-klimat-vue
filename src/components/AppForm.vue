<script setup lang="ts">
import { reactive, ref, useId } from "vue";
import IconCheck from "@/components/icons/IconCheck.vue";
import BaseButton from "@/components/ui/BaseButton.vue";

const props = withDefaults(defineProps<{
  showHeader?: boolean
  title: string
  description?: string
  theme?: "dark" | "light" | null
}>(), {
  showHeader: true,
  title: "Оставьте заявку",
  description: "Заполните форму, и наши специалисты свяжутся с вами в ближайшее время",
  theme: "dark",
});

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
              ? 'app-form__input--dark'
              : 'app-form__input--light'"
              required
          />

          <input
              v-model="formFields.phoneNumber"
              type="tel"
              name="phoneNumber"
              placeholder="Номер телефона"
              class="app-form__input text-big"
              :class="theme === 'dark'
              ? 'app-form__input--dark'
              : 'app-form__input--light'"
              required
          />
        </div>

        <textarea
            v-model="formFields.comment"
            name="comment"
            placeholder="Комментарий"
            class="app-form__textarea text-big"
            :class="theme === 'dark'
            ? 'app-form__textarea--dark'
            : 'app-form__textarea--light'"
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
              :class="{ 'app-form__checkbox--checked': isChecked }"
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

      <BaseButton
          type="submit"
          variant="primary"
          size="lg"
          class="app-form__submit"
      >
        Оставить заявку
      </BaseButton>
    </form>
  </div>
</template>

<style scoped lang="postcss">

</style>


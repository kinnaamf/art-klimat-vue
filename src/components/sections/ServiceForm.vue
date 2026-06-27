<script setup lang="ts">
import { reactive, ref } from "vue";
import IconCheck from "@/components/icons/IconCheck.vue";
import BaseButton from "@/components/ui/BaseButton.vue";

const formFields = reactive({
  name: "",
  phoneNumber: "",
  comment: ""
})

const isChecked = ref<boolean>(false);
</script>

<template>
  <div class="service-form">
    <form action="" class="space-y-8">
      <div class="space-y-4">
        <h3 class="h3">Оставьте заявку</h3>
        <span class="text-1 text-white">Заполните форму, и наши специалисты свяжутся с вами в ближайшее время</span>
      </div>

      <div class="flex flex-col gap-4">
        <div class="flex gap-4">
          <input
              type="text"
              placeholder="Имя"
              class="text-big placeholder:!text-white/50 !text-white app-form-input"
              v-model="formFields.name"
          /> <input
            type="text"
            placeholder="Номер телефона"
            class="text-big placeholder:!text-white/50 !text-white app-form-input"
            v-model="formFields.phoneNumber"
        />
        </div>

        <textarea
            class="resize-none text-big placeholder:!text-white/50 !text-white app-form-textarea"
            placeholder="Комментарий"
            v-model="formFields.comment"
        />
      </div>

      <div>
        <label for="checkbox" class="flex items-start gap-4">
          <input type="checkbox"
                 name="checkbox"
                 id="checkbox"
                 hidden
                 v-model="isChecked">
          <div class="w-6 h-6 rounded-[6px] flex items-center justify-center"
               :class="[
                   isChecked ? 'bg-orange' : 'bg-white'
               ]">
            <IconCheck v-if="isChecked"/>
          </div>

          <span class="text-big text-white">
            Я ознакомлен(а) с
            <a class="text-orange">Политикой конфиденциальности</a>
            и даю Cогласие <br>
            на обработку
            <a class="text-orange">персональных данных</a>
          </span>
        </label>
      </div>

      <BaseButton variant="primary" size="lg">Оставить заявку</BaseButton>
    </form>
  </div>
</template>

<style scoped lang="postcss">

</style>
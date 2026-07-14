import { reactive, type Ref, ref } from "vue";

export const useForm = (file: Ref<File | null>) => {

  const formFields = reactive({
    name: '',
    phoneNumber: '',
    comment: ''
  })

  const isChecked = ref<boolean>(false)
  const showConsentError = ref<boolean>(false)
  const isLoading = ref<boolean>(false)

  const submitError = ref<string | null>(null)
  const submitSuccess = ref<boolean>(false)

  const handleSubmit = async () => {
    if (!isChecked.value) {
      showConsentError.value = true
      return
    }

    showConsentError.value = false
    isLoading.value = true
    submitError.value = null

    const formData = new FormData()
    formData.append('name', formFields.name)
    formData.append('phone', formFields.phoneNumber)
    formData.append('comment', formFields.comment)
    formData.append('source_page', window.location.href)

    if (file.value) {
      formData.append('file', file.value)
    }

    try {
      const response = await fetch('/api/public/leads', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        submitError.value = 'Не удалось отправить заявку. Попробуйте позже'
        return
      }

      submitSuccess.value = true

      Object.assign(formFields, {
        name: '',
        phone: '',
        comment: '',
      })

      file.value = null

      isChecked.value = false
    } catch (e) {
      submitError.value = 'Не удалось отправить заявку. Попробуйте позже'
      console.error(e)
    } finally {
      isLoading.value = false
    }
  }

  return {
    formFields,
    isChecked,
    showConsentError,
    isLoading,
    submitError,
    submitSuccess,
    handleSubmit,
  }
}
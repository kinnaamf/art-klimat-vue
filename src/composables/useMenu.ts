import { ref } from "vue";

const isMenuOpen = ref<boolean>(false)

export const useMenu = () => {
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value

    document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
  }

  return {
    isMenuOpen,
    toggleMenu
  }
}
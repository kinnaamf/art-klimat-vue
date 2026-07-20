import { ref, onMounted } from "vue";

export const useSliderDrag = () => {
  const sliderRef = ref<HTMLElement | null>(null)

  const isDown = ref(false)
  const startX = ref(0)
  const scrollLeft = ref(0)

  const startDragging = (e: MouseEvent) => {
    if (!sliderRef.value || !isDown.value) return
    if (window.innerWidth < 1536) return

    e.preventDefault()

    isDown.value = true

    startX.value = e.pageX - sliderRef.value.offsetLeft

    scrollLeft.value = sliderRef.value.scrollLeft
  }

  const drag = (e: MouseEvent) => {
    if (!isDown.value || !sliderRef.value) return;
    e.preventDefault()

    const x = e.pageX - sliderRef.value.offsetLeft
    const walk = (x - startX.value) * 1.5

    sliderRef.value.scrollLeft = scrollLeft.value - walk
  }

  const stopDragging = () => { isDown.value = false}

  return {
    sliderRef,
    startDragging,
    drag,
    stopDragging,
  }
}
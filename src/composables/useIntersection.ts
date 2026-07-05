import { type Ref, onMounted, ref, watch } from "vue";

export const useIntersection = (
  element: Ref<HTMLElement | null>,
  threshold = 0.1
) => {
  const isVisible = ref<boolean>(false);

  watch(element, (el) => {
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]: any) => {
        isVisible.value = entry.isIntersecting
      }, { threshold }
    )

    observer.observe(el)
  })

  return { isVisible };
}
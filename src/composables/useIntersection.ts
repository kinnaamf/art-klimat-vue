import { type Ref, onMounted, ref } from "vue";

export const useIntersection = (
  element: Ref<HTMLElement | null>,
  threshold = 0.1
) => {
  const isVisible = ref<boolean>(false);

  onMounted(() => {
    if (!element.value) return;

    const observer = new IntersectionObserver(
      ([entry]: any) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer.disconnect();
        }
      }, { threshold }
    )

    observer.observe(element.value)
  })

  return { isVisible };
}
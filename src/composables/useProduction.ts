import { onMounted, ref } from "vue";

export const useProduction = () => {
  const isPastTrigger1 = ref<boolean>(false);
  const isPastTrigger2 = ref<boolean>(false);
  const isPastTrigger3 = ref<boolean>(false);

  onMounted(() => {
    const trigger1 = document.querySelector('.production-trigger-1');
    if (!trigger1) return;

    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isPastTrigger1.value = entry.isIntersecting
          observer1.disconnect();
        }
      },
      { threshold: 0.1 }
    )
    observer1.observe(trigger1);


    const trigger2 = document.querySelector('.production-trigger-2');
    if (!trigger2) return;

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isPastTrigger2.value = entry.isIntersecting
          observer2.disconnect();
        }
      },
      { threshold: 0.1 }
    )
    observer2.observe(trigger2);

    const trigger3 = document.querySelector('.production-trigger-3');
    if (!trigger3) return;

    const observer3 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isPastTrigger3.value = entry.isIntersecting
          observer3.disconnect();
        }
      },
      { threshold: 0.1 }
    )
    observer3.observe(trigger3);
  })

  return {
    isPastTrigger1,
    isPastTrigger2,
    isPastTrigger3
  }
}
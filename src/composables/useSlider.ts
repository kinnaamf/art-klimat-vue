import {
  IconCycle,
  IconExperience,
  IconWarehouse,
  IconEquipment,
  IconFlexibility,
  IconComplexity,
} from "@/components/icons/slider.ts"

export interface Feature {
  title: string
  description: string
  icon: any
}

import { computed, ref } from "vue";

export const useSlider = () => {

  // FEATURE SECTION

  const featureData: Feature[] = [
      {
        title: 'Полный цикл работ',
        description: 'По инженерным системам: от проектирования до запуска и сервисного обслуживания',
        icon: IconCycle
      },
    {
      title: 'Более 15 лет опыта',
      description: 'В сфере вентиляции, кондиционирования и инженерных систем. Компания работает с 2007 года',
      icon: IconExperience
    },
    {
      title:
      'Более 3600 м²',
      description:
      'Собственных складов и производственных площадей. Наличие продукции и материалов позволяет минимизировать сроки поставки',
      icon: IconWarehouse
    },
    {
      title:
      'Современное оборудование',
      description:
      'Применение актуальных инженерных решений. Использование передовых технологий в производстве и монтаже',
      icon: IconEquipment
    },
    {
      title: 'Гибкий подход',
      description: 'К каждому проекту. Подбор решений под задачи, бюджет и сроки заказчика',
      icon: IconFlexibility,
    },
    {
      title:
      'Проекты любой сложности',
      description:
      'Жилые комплексы, производственные предприятия, офисные здания, гостиницы, склады и промышленные объекты',
      icon: IconComplexity
    },
    ]

  const featuresRef = ref<HTMLElement | null>(null)

  const isDown = ref(false)
  const startX = ref(0)
  const scrollLeft = ref(0)

  const startDragging = (e: MouseEvent) => {
    if (!featuresRef.value) return;
    isDown.value = true

    startX.value = e.pageX - featuresRef.value.offsetLeft

    scrollLeft.value = featuresRef.value.scrollLeft
  }

  const drag = (e: MouseEvent) => {
    if (!isDown.value || !featuresRef.value) return;
    e.preventDefault()

    const x = e.pageX - featuresRef.value.offsetLeft
    const walk = (x - startX.value) * 1.5

    featuresRef.value.scrollLeft = scrollLeft.value - walk
  }

  const stopDragging = () => {
    isDown.value = false
  }

  // PRODUCTION SECTION

  const slides = [
    { main: '/images/production-slider/slide-1.png', alt: 'Вентиляционная система в производственном помещении' },
    { main: '/images/production-slider/slide-2.png', alt: 'Монтаж климатического оборудования' },
    { main: '/images/production-slider/slide-3.png', alt: 'Промышленная вентиляция' },
  ]

  const current = ref(0)

  const nextIndex = computed(() => (current.value + 1) % slides.length)

  const next = () => {
    current.value = nextIndex.value
  }

  const prev = () => {
    current.value = (current.value - 1 + slides.length) % slides.length
  }

  return {
    featuresRef,
    startDragging,
    drag,
    stopDragging,
    featureData,

    slides,
    current,
    nextIndex,
    next,
    prev,
  }
}
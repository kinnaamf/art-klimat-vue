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

  // PRODUCTION SECTION

  const slides = [
    { main: '/images/production-slider/slide-1.webp', alt: 'Вентиляционная система в производственном помещении' },
    { main: '/images/production-slider/slide-2.webp', alt: 'Монтаж климатического оборудования' },
    { main: '/images/production-slider/slide-3.webp', alt: 'Промышленная вентиляция' },
  ]

  const current = ref(1)

  const nextIndex = computed(() => (current.value + 1) % slides.length)

  const next = () => {
    current.value = nextIndex.value
  }

  const prev = () => {
    current.value = (current.value - 1 + slides.length) % slides.length
  }

  // PRODUCTS SECTION


  return {
    featureData,

    slides,
    current,
    nextIndex,
    next,
    prev,
  }
}
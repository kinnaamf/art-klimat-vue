import { computed, onMounted, ref } from "vue";

const activeLink = ref(1)

export const  useHeader = () => {
  const links = [
    {
      id: 1,
      title: 'Главная',
      to: 'hero'
    },
    {
      id: 2,
      title: 'Продукция',
      to: 'products'
    },
    {
      id: 3,
      title: 'Услуги',
      to: 'service'
    },
    {
      id: 4,
      title: 'Производство',
      to: 'production'
    },
    {
      id: 5,
      title: 'Объекты',
      to: 'projects'
    },
    {
      id: 6,
      title: 'О компании',
      to: 'about'
    },
    {
      id: 7,
      title: 'Контакты',
      to: 'contact'
    },
  ]

  const lightClass = computed(() => {
    return 'bg-white/10'
  })

  const darkClass = computed(() => {
    return 'bg-darkgray/90'
  })

  const isPastHero = ref<boolean>(false);

  onMounted(() => {
    const hero = document.querySelector('.hero');

    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        isPastHero.value = !entry.isIntersecting
      },
      {threshold: 0, rootMargin: '-500px 0px 0px 0px'}
    )
    observer.observe(hero);
  })

  return {
    links,
    activeLink,
    lightClass,
    darkClass,
    isPastHero
  }
}
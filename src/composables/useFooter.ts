export const useFooter = () => {
  const services = [
    { label: 'Проектирование', to: '/' },
    { label: 'Производство', to: '/' },
    { label: 'Монтаж', to: '/' },
    { label: 'Пусконаладка', to: '/' },
  ]

  const products = [
    { label: 'Воздуховоды', to: '/' },
    { label: 'Круглые фасонные части', to: '/' },
    { label: 'Прямоугольные фасонные части', to: '/' },
    { label: 'Элементы систем вентиляции', to: '/' },
    { label: 'Нестандартные изделия', to: '/' },
  ]

  const menu = [
    { label: 'Производство', to: '/' },
    { label: 'Объекты', to: '/' },
    { label: 'О компании', to: '/' },
    { label: 'Контакты', to: '/' },
  ]

  return {
    services,
    products,
    menu,
  }
}
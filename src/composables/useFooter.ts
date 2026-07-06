export const useFooter = () => {
  const services = [
    { label: 'Проектирование', to: '' },
    { label: 'Производство', to: '' },
    { label: 'Монтаж', to: '' },
    { label: 'Пусконаладка', to: '' },
  ]

  const products = [
    { label: 'Воздуховоды', to: '/' },
    { label: 'Круглые фасонные части', to: '/' },
    { label: 'Прямоугольные фасонные части', to: '/' },
    { label: 'Элементы систем вентиляции', to: '/' },
    { label: 'Нестандартные изделия', to: '/' },
  ]

  const menu = [
    { label: 'Производство', to: 'production' },
    { label: 'Объекты', to: 'projects' },
    { label: 'О компании', to: 'about' },
    { label: 'Контакты', to: 'contact' },
  ]

  return {
    services,
    products,
    menu,
  }
}
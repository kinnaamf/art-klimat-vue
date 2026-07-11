export interface Stat {
  title: number
  description: string
}

export const useStats = () => {
  const stats: Stat[] = [
    {
      title: 20,
      description: 'Лет на рынке'
    },
    {
      title: 800,
      description: 'Реализованных проектов'
    },
    {
      title: 43,
      description: 'Сотрудников вштате'
    },
    {
      title: 321,
      description: 'Отзывов клиентов'
    },
  ]

  return {
    stats,
  }
}
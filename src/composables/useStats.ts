export interface Stat {
  title: string
  description: string
}

export const useStats = () => {
  const stats: Stat[] = [
    {
      title: '20',
      description: 'Лет на рынке'
    },
    {
      title: '800+',
      description: 'Реализованных проектов'
    },
    {
      title: '43',
      description: 'Сотрудников в штате'
    },
    {
      title: '321',
      description: 'Отзывов клиентов'
    },
  ]

  return {
    stats,
  }
}
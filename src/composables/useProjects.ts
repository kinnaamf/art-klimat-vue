export interface Project {
  id: number;
  title: string;
  area: string;
  unit: string;
  image: string;
}

export const useProjects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Производство пищевых добавок «Русский Бейкелс»',
      area: '16 000 ',
      unit: 'м<sup>2<sup>',
      image: '/images/completed-projects/image-1.png'
    },
    {
      id: 2,
      title: 'Производство пищевых добавок «Русский Бейкелс»',
      area: '16 000 ',
      unit: 'м<sup>2<sup>',
      image: '/images/completed-projects/image-2.png'
    },
    {
      id: 3,
      title: 'Производство пищевых добавок «Русский Бейкелс»',
      area: '16 000 ',
      unit: 'м<sup>2<sup>',
      image: '/images/completed-projects/image-3.png'
    },
    {
      id: 4,
      title: 'Производство пищевых добавок «Русский Бейкелс»',
      area: '16 000 ',
      unit: 'м<sup>2<sup>',
      image: '/images/completed-projects/image-4.png'
    },
    {
      id: 5,
      title: 'Производство пищевых добавок «Русский Бейкелс»',
      area: '16 000 ',
      unit: 'м<sup>2<sup>',
      image: '/images/completed-projects/image-5.png'
    },
    {
      id: 6,
      title: 'Производство пищевых добавок «Русский Бейкелс»',
      area: '16 000 ',
      unit: 'м<sup>2<sup>',
      image: '/images/completed-projects/image-6.png'
    },
    {
      id: 7,
      title: 'Производство пищевых добавок «Русский Бейкелс»',
      area: '16 000 ',
      unit: 'м<sup>2<sup>',
      image: '/images/completed-projects/image-7.png'
    },
  ]

  return {
    projects
  }
}
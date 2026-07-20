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
      title: 'МФК «Лахта центр»',
      area: '70 000 ',
      unit: 'м<sup>2<sup>',
      image: '/images/completed-projects/image-1.webp'
    },
    {
      id: 2,
      title: 'Новая Голландия',
      area: '9 500 ',
      unit: 'м<sup>2<sup>',
      image: '/images/completed-projects/image-2.webp'
    },
    {
      id: 3,
      title: 'Бизнес-центр «ЭНЕРГИЯ»',
      area: '11 000 ',
      unit: 'м<sup>2<sup>',
      image: '/images/completed-projects/image-3.webp'
    },
    {
      id: 4,
      title: 'Клубный дом «Три Грации»',
      area: '20 000 ',
      unit: 'м<sup>2<sup>',
      image: '/images/completed-projects/image-4.webp'
    },
    {
      id: 5,
      title: 'ДГМКЦ ВМТ им. К.А. Раухфуса',
      area: '47 000 ',
      unit: 'м<sup>2<sup>',
      image: '/images/completed-projects/image-5.webp'
    },
    {
      id: 6,
      title: 'Завод промышленного оборудования БПК',
      area: '15 000 ',
      unit: 'м<sup>2<sup>',
      image: '/images/completed-projects/image-6.webp'
    },
    {
      id: 7,
      title: 'Ладожский вокзал',
      area: '57 000 ',
      unit: 'м<sup>2<sup>',
      image: '/images/completed-projects/image-7.webp'
    },
  ]

  return {
    projects
  }
}
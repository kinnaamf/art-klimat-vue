export interface Product {
  id: number;
  name: string;
  count: number;
  price: number;
  image: string;
}

export const useProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Воздуховоды',
      count: 48,
      price: 1200,
      image: '/images/products/image-1.png'
    },
    {
      id: 2,
      name: 'Круглые фасонные части',
      count: 48,
      price: 1200,
      image: '/images/products/image-2.png'
    },
    {
      id: 3,
      name: 'Прямоугольные\nфасонные части',
      count: 48,
      price: 1200,
      image: '/images/products/image-3.png'
    },
    {
      id: 4,
      name: 'Элементы систем\nвентиляции',
      count: 48,
      price: 1200,
      image: '/images/products/image-4.png'
    },
    {
      id: 5,
      name: 'Нестандартные изделия',
      count: 48,
      price: 1200,
      image: '/images/products/image-5.png'
    },
  ]

  return {
    products,
  }
}
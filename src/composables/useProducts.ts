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
      image: '/images/products/image-1.webp'
    },
    {
      id: 2,
      name: 'Круглые фасонные части',
      count: 48,
      price: 1200,
      image: '/images/products/image-2.webp'
    },
    {
      id: 3,
      name: 'Прямоугольные\nфасонные части',
      count: 48,
      price: 1200,
      image: '/images/products/image-3.webp'
    },
    {
      id: 4,
      name: 'Элементы систем\nвентиляции',
      count: 48,
      price: 1200,
      image: '/images/products/image-4.webp'
    },
    {
      id: 5,
      name: 'Нестандартные изделия',
      count: 48,
      price: 1200,
      image: '/images/products/image-5.webp'
    },
  ]

  return {
    products,
  }
}
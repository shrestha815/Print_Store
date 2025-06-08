// /src/lib/mockShoes.ts

export interface Shoe {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  description: string;
  sizes: number[];
}

export const mockShoes: Shoe[] = [
  {
    id: '1',
    name: 'Air Max 270',
    brand: 'Nike',
    price: 120,
    image: '/shoes/air-max-270.jpg',
    description: 'Experience all-day comfort with Nike Air Max 270, designed for modern lifestyle.',
    sizes: [6, 7, 8, 9, 10, 11],
  },
  {
    id: '2',
    name: 'Ultraboost 22',
    brand: 'Adidas',
    price: 150,
    image: '/shoes/ultraboost-22.jpg',
    description: 'Responsive boost cushioning for your daily run or street style.',
    sizes: [7, 8, 9, 10, 11, 12],
  },
  {
    id: '3',
    name: 'Chuck Taylor All Star',
    brand: 'Converse',
    price: 60,
    image: '/shoes/chuck-taylor.jpg',
    description: 'The timeless classic canvas sneaker, now re-engineered for better comfort.',
    sizes: [6, 7, 8, 9, 10],
  },
  {
    id: '4',
    name: 'Classic Clog',
    brand: 'Crocs',
    price: 45,
    image: '/shoes/crocs-clog.jpg',
    description: 'Lightweight, comfortable, and breathable — perfect for everyday wear.',
    sizes: [5, 6, 7, 8, 9, 10],
  }
];

import traditional from '../assets/tradicional.svg';
import americano from '../assets/americano.svg';
import cremoso from '../assets/cremoso.svg';
import gelado from '../assets/gelado.svg';
import pingado from '../assets/pingado.svg';
import latte from '../assets/latte.svg';
import capuccino from '../assets/capuccino.svg';
import macciato from '../assets/macchiato.svg';
import moccaccino from '../assets/mocaccino.svg';
import chocate from '../assets/chocolate.svg';
import cubano from '../assets/cubano.svg';
import havaiano from '../assets/havaiano.svg';
import arabe from '../assets/arabe.svg';
import irlandes from '../assets/irlandes.svg';
import { ProductType } from '../pages/Home/ProductCard';

export const COFFEE_LIST: Array<ProductType> = [
  {
    id:'123e4567-e89b-12d3-a456-426655440000',
    title: 'Traditional Expresso',
    tags: ['traditional'],
    description: 'The traditional coffee made with hot water and ground beans.',
    thumbnail: traditional,
    price: 9.9
  },
  {
    id:'a0b1c2d3-e4f5-6789-abc0-de1f2a3b4c5d',
    title: 'American Espresso',
    tags: ['traditional'],
    description: 'Diluted espresso, less intense than the traditional one.',
    thumbnail: americano,
    price: 8.9
  },
  {
    id:'f0e1d2c3-4b5a-6789-0987-6543f2e1d0c9',
    title: 'Creamy Espresso',
    tags: ['traditional'],
    description: 'Traditional espresso coffee with creamy foam.',
    thumbnail: cremoso,
    price: 11.9
  },
  {
    id:'8b9c0d1e-2f3a-4b5c-6d7e-89a0b1c2d3e4',
    title: 'Iced Espresso',
    tags: ['traditional', 'ice'],
    description: 'Beverage prepared with espresso and ice cubes.',
    thumbnail: gelado,
    price: 9.9
  },
  {
    id:'cdef1234-abcd-5678-abcd-9012efab5678',
    title: 'Coffee with Milk',
    tags: ['traditional', 'milk'],
    description: 'Half-and-half of traditional espresso with steamed milk.',
    thumbnail: pingado,
    price: 9.9
  },
  {
    id:'54321678-90ab-efab-cdef-9876543210fe',
    title: 'Latte',
    tags: ['traditional', 'milk'],
    description: 'A shot of espresso with twice the amount of milk and creamy foam.',
    thumbnail: latte,
    price: 10.9
  },
  {
    id:'6d7e8f9a-0b1c-2d3e-4f5a-67890abacdef',
    title: 'Capuccino',
    tags: ['traditional', 'milk'],
    description: 'Cinnamon drink made from equal parts of coffee, milk, and foam.',
    thumbnail: capuccino,
    price: 12.9
  },
  {
    id:'1e2f3a4b-5c6d-7e8f-9a0b-1c2d3e4f5a6b',
    title: 'Macchiato',
    tags: ['traditional', 'milk'],
    description: 'Espresso coffee mixed with a bit of hot milk and foam.',
    thumbnail: macciato,
    price: 12.9
  },
  {
    id:'9ab8cd7e-6f5a-4b3c-2d1e-09876fe54321',
    title: 'Mocaccino',
    tags: ['traditional', 'milk'],
    description: 'Espresso with chocolate syrup, a small amount of milk, and foam.',
    thumbnail: moccaccino,
    price: 13.9
  },
  {
    id:'34567890-abcd-efab-3456-78901234cdef',
    title: 'Hot Chocolate',
    tags: ['traditional', 'milk'],
    description: 'A beverage made with chocolate dissolved in hot milk and coffee.',
    thumbnail: chocate,
    price: 10.9
  },
  {
    id:'2b3c4d5e-6f7a-8b9c-d1e2-f3a4b5c6d7ea',
    title: 'Cuban',
    tags: ['special', 'alcoholic', 'iced'],
    description: 'Iced Espresso Coffee with Rum, Cream, and Mint.',
    thumbnail: cubano,
    price: 13.9
  },
  {
    id:'1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
    title: 'Hawaiian',
    tags: ['special'],
    description: 'Sweetened beverage made with coffee and coconut milk.',
    thumbnail: havaiano,
    price: 15.9
  },
  {
    id:'efab5678-1234-efab-5678-1234cdef5678',
    title: 'Arabic ',
    tags: ['special'],
    description: 'A beverage prepared with Arabica coffee beans and spices.',
    thumbnail: arabe,
    price: 14.9
  },
  {
    id:'56781234-abcd-4321-efab-12340987cdef',
    title: 'Irish',
    tags: ['special'],
    description: 'A beverage made with coffee, Irish whiskey, sugar, and whipped cream.',
    thumbnail: irlandes,
    price: 15.9
  }
];
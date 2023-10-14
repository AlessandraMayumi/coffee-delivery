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
import { CoffeeCardType } from '../pages/Home/CoffeeCard';

export const COFFEE_LIST: Array<CoffeeCardType> = [
  {
    title: 'Traditional Expresso',
    tags: ['traditional'],
    description: 'The traditional coffee made with hot water and ground beans.',
    thumbnail: traditional,
    price: 9.9
  },
  {
    title: 'American Espresso',
    tags: ['traditional'],
    description: 'Diluted espresso, less intense than the traditional one.',
    thumbnail: americano,
    price: 8.9
  },
  {
    title: 'Creamy Espresso',
    tags: ['traditional'],
    description: 'Traditional espresso coffee with creamy foam.',
    thumbnail: cremoso,
    price: 11.9
  },
  {
    title: 'Iced Espresso',
    tags: ['traditional', 'ice'],
    description: 'Beverage prepared with espresso and ice cubes.',
    thumbnail: gelado,
    price: 9.9
  },
  {
    title: 'Coffee with Milk',
    tags: ['traditional', 'milk'],
    description: 'Half-and-half of traditional espresso with steamed milk.',
    thumbnail: pingado,
    price: 9.9
  },
  {
    title: 'Latte',
    tags: ['traditional', 'milk'],
    description: 'A shot of espresso with twice the amount of milk and creamy foam.',
    thumbnail: latte,
    price: 10.9
  },
  {
    title: 'Capuccino',
    tags: ['traditional', 'milk'],
    description: 'Cinnamon drink made from equal parts of coffee, milk, and foam.',
    thumbnail: capuccino,
    price: 12.9
  },
  {
    title: 'Macchiato',
    tags: ['traditional', 'milk'],
    description: 'Espresso coffee mixed with a bit of hot milk and foam.',
    thumbnail: macciato,
    price: 12.9
  },
  {
    title: 'Mocaccino',
    tags: ['traditional', 'milk'],
    description: 'Espresso with chocolate syrup, a small amount of milk, and foam.',
    thumbnail: moccaccino,
    price: 13.9
  },
  {
    title: 'Hot Chocolate',
    tags: ['traditional', 'milk'],
    description: 'A beverage made with chocolate dissolved in hot milk and coffee.',
    thumbnail: chocate,
    price: 10.9
  },
  {
    title: 'Cuban',
    tags: ['special', 'alcoholic', 'iced'],
    description: 'Iced Espresso Coffee with Rum, Cream, and Mint.',
    thumbnail: cubano,
    price: 13.9
  },
  {
    title: 'Hawaiian',
    tags: ['special'],
    description: 'Sweetened beverage made with coffee and coconut milk.',
    thumbnail: havaiano,
    price: 15.9
  },
  {
    title: 'Arabic ',
    tags: ['special'],
    description: 'A beverage prepared with Arabica coffee beans and spices.',
    thumbnail: arabe,
    price: 14.9
  },
  {
    title: 'Irish',
    tags: ['special'],
    description: 'A beverage made with coffee, Irish whiskey, sugar, and whipped cream.',
    thumbnail: irlandes,
    price: 15.9
  }
];
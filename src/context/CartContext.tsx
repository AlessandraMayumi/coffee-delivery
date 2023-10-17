import { ReactNode, createContext, useEffect, useState } from 'react';
import { COFFEE_LIST } from '../constants/catalog';
import { ProductType } from '../pages/Home/ProductCatalog';

// Context Provider - interface
interface CartContextProviderProps {
  children: ReactNode
}

// Context - interface
interface Order {
  productId: string,
  quantity: number
}

interface CartContextType {
  products: ProductType[]
  findProductById: (productId: string) => ProductType | undefined
  cart: Order[]
  addOrUpdateCart: (order: Order) => void
}

/** Context */
export const CartContext = createContext({} as CartContextType);

/** Context Provider */
export function CartContextProvider({ children }: CartContextProviderProps) {
  // State
  const [cart, setCart] = useState<Order[]>([]);
  const [products, setProducts] = useState<Array<ProductType>>(COFFEE_LIST);

  function findProductById(productId: string) {
    return products.find(p => p.id === productId);
  }

  function addOrUpdateCart(order: Order) {
    const orderInCart = cart.find(c => c.productId === order.productId);
    if (orderInCart) {
      const newCart = cart.map(item => {
        if (item.productId === order.productId) return order;
        return item;
      });
      setCart(newCart);
    }
    else {
      setCart([...cart, order]);
    }
  }

  useEffect(() => {
    // const stateJSON = JSON.stringify(cart);
    // localStorage.setItem('@coffee-delivery:cart-state', stateJSON);
    console.log('useEffect: ', cart);
  }, [cart]);

  return (
    <CartContext.Provider value={{
      products,
      findProductById,
      cart,
      addOrUpdateCart,
    }} >
      {children}
    </CartContext.Provider>
  );
}
import { ReactNode, createContext, useEffect, useState } from 'react';
import { COFFEE_LIST } from '../constants/catalog';
import { ProductType } from '../pages/Home/ProductCatalog';

// Context Provider Props
interface CartContextProviderProps {
  children: ReactNode
}

// Context Type
interface Order {
  productId: string,
  quantity: number
}

interface CartContextType {
  products: ProductType[]
  findProductById: (productId: string) => ProductType | undefined
  cartProducts: (CartProductType | undefined)[]
  addOrUpdateCart: (order: Order) => void
  removeFromCart: (productId: string) => void
  incrementCart: (productId: string) => void,
  decrementCart: (productId: string) => void,
}

export interface CartProductType extends ProductType {
  quantity: number
}

/** Context */
export const CartContext = createContext({} as CartContextType);

/** Context Provider */
export function CartContextProvider({ children }: CartContextProviderProps) {
  // State
  const [cart, setCart] = useState<Order[]>([]);
  const [cartProducts, setCartProducts] = useState<(CartProductType | undefined)[]>([]);
  const products = COFFEE_LIST;

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

  function removeFromCart(productId: string) {
    setCart(cart.filter(c => c.productId !== productId));
  }

  function incrementCart(productId: string) {
    const orderInCart = cart.find(c => c.productId === productId);
    if (orderInCart) {
      const newCart = cart.map(item => {
        if (item.productId === productId) {
          return {
            productId,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      setCart(newCart);
    }
  }

  function decrementCart(productId: string) {
    const orderInCart = cart.find(c => c.productId === productId);
    if (orderInCart && orderInCart.quantity > 1) {
      const newCart = cart.map(item => {
        if (item.productId === productId) {
          return {
            productId,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
      setCart(newCart);
    } 
    else {
      removeFromCart(productId);
    }
  }

  useEffect(() => {
    // const stateJSON = JSON.stringify(cart);
    // localStorage.setItem('@coffee-delivery:cart-state', stateJSON);

    // list all products in the cart
    if (!cart) setCartProducts([]);
    else {
      setCartProducts(cart.map(order => {
        const { productId, quantity } = order;
        const product = findProductById(productId);
        if (product) return {
          ...product,
          quantity
        };
      }));
    }
  }, [cart]);

  return (
    <CartContext.Provider value={{
      products,
      findProductById,
      cartProducts,
      addOrUpdateCart,
      removeFromCart,
      incrementCart,
      decrementCart,
    }} >
      {children}
    </CartContext.Provider>
  );
}
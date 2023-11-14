import { ReactNode, createContext, useEffect, useReducer, useState } from 'react';
import { COFFEE_LIST } from '../constants/catalog';
import { ProductType } from '../pages/Home/ProductCatalog';
import { OrderType, reducerCart } from '../reducers/carts/reducer';
import { addOrUpdateCartAction, decrementCartAction, incrementCartAction, removeFromCartAction } from '../reducers/carts/actions';

// Context Provider Props
interface CartContextProviderProps {
  children: ReactNode
}

// Context Type
interface CartContextType {
  // props
  products: ProductType[]
  cartProducts: (CartProductType | undefined)[]
  cartCount: number
  cartCost: number
  cartProductsCost: number
  cartDeliveryCost: number
  // functions
  findProductById: (id: string) => ProductType | undefined
  addOrUpdateCart: (order: OrderType) => void
  removeFromCart: (id: string) => void
  incrementCart: (id: string) => void
  decrementCart: (id: string) => void

}

export interface CartProductType extends ProductType {
  quantity: number
}

/** Context */
export const CartContext = createContext({} as CartContextType);

/** Context Provider */
export function CartContextProvider({ children }: CartContextProviderProps) {
  // State
  const [cart, dispatch] = useReducer(reducerCart, []);
  const [cartProducts, setCartProducts] = useState<(CartProductType | undefined)[]>([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartCost, setCartCost] = useState(0);
  const [cartProductsCost, setCartProductsCost] = useState(0);
  const [cartDeliveryCost, setCartDeliveryCost] = useState(0);
  const products = COFFEE_LIST;

  function findProductById(id: string) {
    return products.find(p => p.id === id);
  }

  function addOrUpdateCart(order: OrderType) {
    dispatch(addOrUpdateCartAction(order));
  }

  function removeFromCart(id: string) {
    dispatch(removeFromCartAction(id));
  }

  function incrementCart(id: string) {
    dispatch(incrementCartAction(id));
  }

  function decrementCart(id: string) {
    dispatch(decrementCartAction(id));
  }

  useEffect(() => {
    // const stateJSON = JSON.stringify(cart);
    // localStorage.setItem('@coffee-delivery:cart-state', stateJSON);

    // list all products in the cart
    if (!cart) setCartProducts([]);
    else {
      let count = 0;
      let cost = 0;
      let delivery = 0;
      setCartProducts(cart.map(order => {
        const { id, quantity } = order;
        const product = findProductById(id);
        if (product) {
          count += quantity;
          cost += product.price * quantity;
          delivery = 10;
          return {
            ...product,
            quantity
          };
        }
      }));
      setCartCount(count);
      setCartCost(cost + delivery);
      setCartProductsCost(cost);
      setCartDeliveryCost(delivery);
    }
  }, [cart]);

  return (
    <CartContext.Provider value={{
      // props
      products,
      cartCount,
      cartCost,
      cartProducts,
      cartProductsCost,
      cartDeliveryCost,
      // functions
      findProductById,
      addOrUpdateCart,
      removeFromCart,
      incrementCart,
      decrementCart,
    }} >
      {children}
    </CartContext.Provider>
  );
}
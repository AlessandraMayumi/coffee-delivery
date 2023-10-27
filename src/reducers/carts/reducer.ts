import { ActionTypes } from './actions';

export interface OrderType {
  id: string,
  quantity: number
}

export function reducerCart(state: OrderType[], action: any) {
  switch (action.type) {
  case ActionTypes.ADD_OR_UPDATE: {
    const orderInCart = state.find(c => c.id === action.order.id);
    if (!orderInCart) return [...state, action.order];
    return state.map(c => c.id === action.order.id ? action.order : c);
  }
  case ActionTypes.REMOVE: {
    return state.filter(c => c.id !== action.id);
  }
  case ActionTypes.INCREMENT: {
    return state.map(c => c.id !== action.id ? c : { ...c, quantity: c.quantity + 1 });
  }
  case ActionTypes.DECREMENT: {
    const order = state.find(c => c.id === action.id);
    if (order && order.quantity == 1) return state.filter(c => c.id !== action.id);
    return state.map(c => {
      if (c.id !== action.id) return c;
      return { ...c, quantity: c.quantity - 1 };
    });
  }
  default:
    return state;
  }
}
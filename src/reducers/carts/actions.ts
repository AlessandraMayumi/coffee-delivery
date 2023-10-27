import { OrderType } from './reducer';

export enum ActionTypes {
  ADD_OR_UPDATE = 'ADD_OR_UPDATE',
  REMOVE = 'REMOVE',
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

// this export .Action is a convention see the expected input

export function addOrUpdateCartAction(order: OrderType) {
  return { 
    type: ActionTypes.ADD_OR_UPDATE, 
    order 
  };
}

export function removeFromCartAction(id: string) {
  return { 
    type: ActionTypes.REMOVE, 
    id 
  };
}

export function incrementCartAction(id: string) {
  return { 
    type: ActionTypes.INCREMENT, 
    id 
  };
}

export function decrementCartAction(id: string) {
  return { 
    type: ActionTypes.DECREMENT, 
    id 
  };
}
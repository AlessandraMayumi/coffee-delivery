import { ReactNode, createContext, useEffect, useState } from 'react';

// Types
interface ProviderProps {
  children: ReactNode
}
export enum PaymentMethod {
  CREDIT_CARD='Credit Card',
  DEBIT_CARD='Debit Card',
  CASH='Cash',
}
interface PaymentContextType {
  method: PaymentMethod
  updateMethod: (newMethod: PaymentMethod) => void
}

// Context
export const PaymentContext = createContext({} as PaymentContextType);

export function PaymentContextProvider({ children }: ProviderProps) {
  const [method, setMethod] = useState(() => {
    // Retrieve data from local storage or set default value
    const storedState = localStorage.getItem('@coffee-delivery: method');
    return storedState ? JSON.parse(storedState) : '';
  });

  useEffect(() => {
    const stateJson = JSON.stringify(method);
    localStorage.setItem('@coffee-delivery: method', stateJson);
  }, [method]);

  function updateMethod(newMethod: PaymentMethod): void {
    return setMethod(newMethod);
  }

  return (
    <PaymentContext.Provider value={{ method, updateMethod }}>
      {children}
    </PaymentContext.Provider>
  );
}

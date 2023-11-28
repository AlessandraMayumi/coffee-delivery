import { ReactNode, createContext, useState } from 'react';

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
  const [method, setMethod] = useState('' as PaymentMethod);

  function updateMethod(newMethod: PaymentMethod) {
    setMethod(newMethod);
  }

  return (
    <PaymentContext.Provider value={{ method, updateMethod }}>
      {children}
    </PaymentContext.Provider>
  );
}
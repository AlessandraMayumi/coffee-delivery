import { ReactNode, createContext, useEffect, useState } from 'react';

// Types
interface ProviderProps {
  children: ReactNode
}
interface AddressType {
  zip: string
  state: string
  city: string
  address: string
  complement?: string
}
interface AddressContextType {
  address: AddressType
  updateAddressByField: (field: string, value: string) => void
}

// Context
export const AddressContext = createContext({} as AddressContextType);

export function AddressContextProvider({ children }: ProviderProps) {
  const [address, setAddress] = useState(() => {
    const storedState = localStorage.getItem('@coffee-delivery: address');
    return storedState ? JSON.parse(storedState) : {} as AddressType;
  });

  useEffect(() => {
    const stateJSON = JSON.stringify(address);
    localStorage.setItem('@coffee-delivery: address', stateJSON);
  }, [address]);

  function updateAddressByField(field: string, value: string): void {
    switch (field) {
    case 'zip':
      setAddress({ ...address, zip: value });
      break;
    case 'state':
      setAddress({ ...address, state: value });
      break;
    case 'city':
      setAddress({ ...address, city: value });
      break;
    case 'address':
      setAddress({ ...address, address: value });
      break;
    case 'complement':
      setAddress({ ...address, complement: value });
      break;
    default:
      break;
    }
  }

  return (
    <AddressContext.Provider value={{ address, updateAddressByField }}>
      {children}
    </AddressContext.Provider>
  );
}
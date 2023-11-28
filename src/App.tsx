import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/default';
import { GlobalStyle } from './styles/global';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import { AddressContextProvider } from './context/AddressContext';
import { PaymentContextProvider } from './context/PaymentContext';

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <AddressContextProvider>
          <PaymentContextProvider>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </PaymentContextProvider>
        </AddressContextProvider>
      </CartContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

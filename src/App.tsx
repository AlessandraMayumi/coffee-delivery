import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/default';
import { GlobalStyle } from './styles/global';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

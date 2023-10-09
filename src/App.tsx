import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/default';
import { GlobalStyle } from './styles/global';

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      Hello World
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

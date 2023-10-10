# Coffee Delivery
This project is an application to manage a shopping cart for a *coffee shop*, which includes the following functionalities:

- List available products (coffees) for purchase
- Add a specific quantity of items to the cart
- Increase or decrease the quantity of items in the cart
- A form for the user to fill in their address
- Display the total number of items in the cart in the Header
- Display the total value of the items in the cart multiplied by their price

Although there are only a few functionalities, it require concepts such as:

- States
- ContextAPI
- LocalStorage
- Immutability of state
- Lists and keys in ReactJS
- Properties
- Componentization

### Figma
https://www.figma.com/file/5yT9ZzZmRQRS4yivGGB3pl/Coffee-Delivery/duplicate

## Create project
Project name: coffee-delivery
options:
React
TypeScript

> npm create vite@latest

## Configure ESLint
https://eslint.org/docs/latest/use/getting-started
```sh
npm init @eslint/config
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JavaScript
The config requires the following dependencies:
@typescript-eslint/eslint-plugin@latest eslint-plugin-react@latest @typescript-eslint/parser@latest
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · npm
```

## Use styled components
```sh
npm install styled-components
npm install --save-dev @types/styled-components
```

Create a theme `default.ts`
```js
export const defaultTheme = {
  'base-title': '#272221',
...
  'white': '#FFFFFF',
};
```

Create a global style `global.ts`
```js
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
...
    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`
```

Injects the theme into all styled components `src/App.tsx`
```js
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/default"
import { GlobalStyle } from "./styles/global"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      ...
      <GlobalStyle />
    </ThemeProvider>
  )
}
```

## React router dom
```sh
npm install react-router-dom
```
Define the routes for your application:
```js
import { Routes, Route } from 'react-router-dom';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/checkout' element={<Checkout />} />
    </Routes>
  );
}
```
To enable the router for the app:
```js
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
```


## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

import { Routes, Route } from 'react-router-dom';
// Constants
import { ROUTE_CHECKOUT, ROUTE_HOME, ROUTE_SUCCESS } from './constants/routes';
// Pages
import { Home } from './pages/Home';
import { Checkout } from './pages/Checkout';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Success } from './pages/Success';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />} >
        <Route path={ROUTE_HOME} element={<Home />} />
        <Route path={ROUTE_CHECKOUT} element={<Checkout key={'checkout'} />} />
        <Route path={ROUTE_SUCCESS} element={<Success />} />
      </Route>
    </Routes>
  );
}
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
} from '../../constants/routes';

const Loader = lazy(() => import('../Loader/Loader'));
const SharedLayout = lazy(() => import('../SharedLayout/SharedLayout'));
const Home = lazy(() => import('../../pages/Home'));
const Login = lazy(() => import('../../pages/Login'));
const Registration = lazy(() => import('../../pages/Registration'));
const NotFound = lazy(() => import('../../pages/NotFound'));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={HOME_ROUTE} element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path={LOGIN_ROUTE} element={<Login />} />
            <Route path={REGISTER_ROUTE} element={<Registration />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;

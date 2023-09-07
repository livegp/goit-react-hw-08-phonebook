import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { appRoutes, HOME_ROUTE } from '../../constants/routes';
import SharedLayout from '../SharedLayout/SharedLayout';

const Loader = lazy(() => import('../Loader/Loader'));
// const SharedLayout = lazy(() => import('../SharedLayout/SharedLayout'));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={HOME_ROUTE} element={<SharedLayout />}>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;

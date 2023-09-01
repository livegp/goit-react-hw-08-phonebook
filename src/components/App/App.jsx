import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SharedLayout from '../SharedLayout/SharedLayout';

const Loader = lazy(() => import('../Loader/Loader'));
// const SharedLayout = lazy(() => import('../SharedLayout/SharedLayout'));
const Home = lazy(() => import('../../pages/Home'));
const NotFound = lazy(() => import('../../pages/NotFound'));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;

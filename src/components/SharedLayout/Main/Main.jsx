import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import MainBox from './Main.styled';
import Loader from '../../Loader/Loader';
import { Container } from '../SharedLayout.styled';

function Main() {
  return (
    <MainBox>
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </MainBox>
  );
}

export default Main;

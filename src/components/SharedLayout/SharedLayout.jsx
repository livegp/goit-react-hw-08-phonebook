import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import { Wrappen } from './SharedLayout.styled';

function SharedLayout() {
  return (
    <Wrappen>
      <Header />
      <Main />
      <Footer />
    </Wrappen>
  );
}

export default SharedLayout;

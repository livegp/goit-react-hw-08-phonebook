import { Container, HeaderBox } from './Header.styled';
import Login from './Login/Login';
import Logo from './Logo/Logo';
import Logout from './Logout/Logout';

function Header() {
  return (
    <HeaderBox>
      <Container>
        <Logo />
        <Login />
        {/* <Logout /> */}
      </Container>
    </HeaderBox>
  );
}

export default Header;

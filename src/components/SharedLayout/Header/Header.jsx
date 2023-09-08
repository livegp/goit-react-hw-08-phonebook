import { Container, HeaderBox } from './Header.styled';
import Logo from './Logo/Logo';
import UserMenu from './UserMenu/UserMenu';

function Header() {
  return (
    <HeaderBox>
      <Container>
        <Logo />
        <UserMenu />
      </Container>
    </HeaderBox>
  );
}

export default Header;

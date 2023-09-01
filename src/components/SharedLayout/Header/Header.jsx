import { IoLogInOutline } from 'react-icons/io5';
import { RiContactsBookLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import { Container, HeaderBox, LoginBtn, Logo } from './Header.styled';

function Header() {
  return (
    <HeaderBox>
      <Container>
        <Logo>
          <Link to="/">
            <RiContactsBookLine />
            <p>Contacts book</p>
          </Link>
        </Logo>
        <LoginBtn type="button">
          <IoLogInOutline />
        </LoginBtn>
      </Container>
    </HeaderBox>
  );
}

export default Header;

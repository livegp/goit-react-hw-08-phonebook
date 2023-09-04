import { RiContactsBookLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import LogoStyled from './Logo.styled';

function Logo() {
  return (
    <LogoStyled>
      <Link to="/">
        <RiContactsBookLine />
        <p>Contacts book</p>
      </Link>
    </LogoStyled>
  );
}

export default Logo;

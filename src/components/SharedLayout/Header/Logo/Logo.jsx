import { RiContactsBookLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import LogoStyled from './Logo.styled';
import { CONTACTS_ROUTE } from '../../../../constants/routes';

function Logo() {
  return (
    <LogoStyled>
      <Link to={CONTACTS_ROUTE}>
        <RiContactsBookLine />
        <p>Contacts book</p>
      </Link>
    </LogoStyled>
  );
}

export default Logo;

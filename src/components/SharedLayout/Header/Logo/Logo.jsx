import { RiContactsBookLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import LogoStyled from './Logo.styled';
import { HOME_ROUTE } from '../../../../constants/routes';

function Logo() {
  return (
    <LogoStyled>
      <Link to={HOME_ROUTE}>
        <RiContactsBookLine />
        <p>Contacts book</p>
      </Link>
    </LogoStyled>
  );
}

export default Logo;

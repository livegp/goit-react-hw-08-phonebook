import { IoLogInOutline } from 'react-icons/io5';

import LoginLink from './Login.styled';
import { LOGIN_ROUTE } from '../../../../../constants/routes';

function Login() {
  return (
    <LoginLink to={LOGIN_ROUTE}>
      <IoLogInOutline />
    </LoginLink>
  );
}

export default Login;

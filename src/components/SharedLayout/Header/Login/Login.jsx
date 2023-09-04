import { IoLogInOutline } from 'react-icons/io5';

import LoginLink from './Login.styled';

function Login() {
  return (
    <LoginLink to="/login">
      <IoLogInOutline />
    </LoginLink>
  );
}

export default Login;

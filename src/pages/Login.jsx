import { Helmet } from 'react-helmet';

import LoginForm from '../components/LoginForm/LoginForm';

function Login() {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </>
  );
}

export default Login;

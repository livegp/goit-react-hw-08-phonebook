import { Helmet } from 'react-helmet';

import RegistrationForm from '../components/RegisterForm/RegisterForm';

function Register() {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegistrationForm />
    </>
  );
}

export default Register;

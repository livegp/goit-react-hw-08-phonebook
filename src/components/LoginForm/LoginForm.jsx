import { toast } from 'react-toastify';

import { Btn, Form, Item, List } from './LoginForm.styled';
import { LOGIN_ROUTE } from '../../constants/routes';
import { useLoginUserMutation } from '../../redux/auth';
import { LinkToLogin } from '../RegisterForm/RegisterForm.styled';

function LoginForm() {
  const [loginUserMutation] = useLoginUserMutation();

  const handleSubmit = async event => {
    event.preventDefault();

    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };

    try {
      const response = await loginUserMutation(formData).unwrap();
      toast.success('User registered successfully:', response);
    } catch (error) {
      toast.error('Registration failed:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Item>
        <List>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={userEmail} //eslint-disable-line
              title="The e-mail address must contain the following characters: letters, numbers, period, symbols before the @ symbol"
              placeholder="Enter your email..."
              required
            />
          </label>
        </List>
        <List>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={userPassword} //eslint-disable-line
              title="Password must be at least 8 characters long and include a combination of letters, numbers, and special characters"
              placeholder="Enter your password..."
              required
            />
          </label>
        </List>
      </Item>
      <Btn type="submit">Registration</Btn>
      <LinkToLogin to={LOGIN_ROUTE}>Already have an account</LinkToLogin>
    </Form>
  );
}

export default LoginForm;

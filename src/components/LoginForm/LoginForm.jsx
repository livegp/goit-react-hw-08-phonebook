import { toast } from 'react-toastify';

import { Btn, Form, LinkToRegister, List } from './LoginForm.styled';
import { REGISTER_ROUTE } from '../../constants/routes';
import { useLoginUserMutation } from '../../redux/authSlice';

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
      toast.success('Login successful:', response);
    } catch (error) {
      toast.error('Login failed:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ul>
        <List>
          <label>
            Email
            <input
              type="email"
              name="userEmail"
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
              name="userPassword"
              title="Password must be at least 8 characters long and include a combination of letters, numbers, and special characters"
              placeholder="Enter your password..."
              minLength={8}
              required
            />
          </label>
        </List>
      </ul>
      <Btn type="submit">Login</Btn>
      <LinkToRegister to={REGISTER_ROUTE}>
        Already have an account
      </LinkToRegister>
    </Form>
  );
}

export default LoginForm;

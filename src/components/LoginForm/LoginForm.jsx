import { useState } from 'react';
import { toast } from 'react-toastify';

import { Button, Form, LinkToRegister, List } from './LoginForm.styled';
import { REGISTER_ROUTE } from '../../constants/routes';
import { useLoginUserMutation } from '../../redux/authSlice';

function LoginForm() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loginUserMutation] = useLoginUserMutation();

  const handleSubmit = async event => {
    event.preventDefault();

    const formData = {
      email: userEmail,
      password: userPassword,
    };

    try {
      const response = await loginUserMutation(formData).unwrap();
      toast.success('Login successful:', response);
      reset();
    } catch (error) {
      toast.error('Login failed:', error);
    }
  };

  const reset = () => {
    setUserEmail('');
    setUserPassword('');
  };

  const handleChange = ({ target: { name: inputName, value } }) => {
    if (inputName === 'userEmail') {
      setUserEmail(value);
    } else if (inputName === 'userPassword') {
      setUserPassword(value);
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
              value={userEmail}
              onChange={handleChange}
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
              value={userPassword}
              onChange={handleChange}
              title="Password must be at least 8 characters long and include a combination of letters, numbers, and special characters"
              placeholder="Enter your password..."
              minLength={8}
              required
            />
          </label>
        </List>
      </ul>
      <Button type="submit">Login</Button>
      <LinkToRegister to={REGISTER_ROUTE}>
        Already have an account
      </LinkToRegister>
    </Form>
  );
}

export default LoginForm;

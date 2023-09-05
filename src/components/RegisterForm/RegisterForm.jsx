import { toast } from 'react-toastify';

import { Btn, Form, Item, LinkToLogin, List } from './RegisterForm.styled';
import { LOGIN_ROUTE } from '../../constants/routes';
import { useRegisterUserMutation } from '../../redux/auth';

function RegisterForm() {
  const [registerUserMutation] = useRegisterUserMutation();

  const handleSubmit = async event => {
    event.preventDefault();

    const name = event.currentTarget.elements.userName.value;
    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;

    const formData = {
      name,
      email,
      password,
    };

    try {
      const response = await registerUserMutation(formData).unwrap();
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
            Name
            <input
              type="text"
              name="name"
              value={userName} //eslint-disable-line
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Enter your name..."
              required
            />
          </label>
        </List>
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

export default RegisterForm;

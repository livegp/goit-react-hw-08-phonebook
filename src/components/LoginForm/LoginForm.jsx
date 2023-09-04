import { nanoid } from 'nanoid';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { Btn, Form, Item, List } from './LoginForm.styled';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../redux/contactsSlice';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [addContact, { isLoading: isAddLoading }] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const emailId = nanoid();
  const passwordId = nanoid();

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async evt => {
    evt.preventDefault();

    const isEmailExist = contacts.some(
      contact => contact.email.toLowerCase() === email.toLowerCase(),
    );

    if (isEmailExist) {
      alert(`${email} is already in contacts`);
      return;
    }

    const isPasswordExist = contacts.some(
      contact => contact.password === password,
    );

    if (isPasswordExist) {
      alert(`The number ${password} is already in contacts`);
      return;
    }

    const newData = { email, password };

    try {
      await addContact(newData);
      reset();
    } catch (error) {
      toast.error('Error adding contact:', error);
    }
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Item>
        <List>
          <label htmlFor={emailId}>Email</label>
          <input
            type="email"
            id={emailId}
            name="email"
            value={email}
            onChange={handleChange}
            title="email may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </List>
        <List>
          <label htmlFor={passwordId}>Password</label>
          <input
            type="password"
            id={passwordId}
            name="password"
            value={password}
            onChange={handleChange}
            title="password number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </List>
      </Item>
      <Btn type="submit" disabled={isAddLoading}>
        Login
      </Btn>
    </Form>
  );
}

export default LoginForm;

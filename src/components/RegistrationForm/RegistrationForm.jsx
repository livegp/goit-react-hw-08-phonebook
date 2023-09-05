import { nanoid } from 'nanoid';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { Btn, Form, Item, LinkToLogin, List } from './RegistrationForm.styled';
import { LOGIN_ROUTE } from '../../constants/routes';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../redux/contactsSlice';

function RegistrationForm() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [addContact, { isLoading: isAddLoading }] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const userNameId = nanoid();
  const emailId = nanoid();
  const passwordId = nanoid();

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') {
      setUserName(value);
    } else if (name === 'email') {
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

    const newData = { userName, email, password };

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
          <label htmlFor={userNameId}>Name</label>
          <input
            type="text"
            id={userNameId}
            name="name"
            value={userName}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </List>
        <List>
          <label htmlFor={emailId}>Email</label>
          <input
            type="email"
            id={emailId}
            name="email"
            value={email}
            onChange={handleChange}
            title="The e-mail address must contain the following characters: letters, numbers, period, symbols before the @ symbol"
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
            title="Password must be at least 8 characters long and include a combination of letters, numbers, and special characters"
            required
          />
        </List>
      </Item>
      <Btn type="submit" disabled={isAddLoading}>
        Registration
      </Btn>
      <LinkToLogin to={LOGIN_ROUTE}>Already have an account</LinkToLogin>
    </Form>
  );
}

export default RegistrationForm;

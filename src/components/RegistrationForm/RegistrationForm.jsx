import { nanoid } from 'nanoid';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { Btn, Form, Item, List } from './RegistrationForm.styled';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../redux/contactsSlice';

function RegistrationForm() {
  const [usernName, setUserName] = useState('');
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
    }
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
          <label htmlFor={userNameId}>Name</label>
          <input
            type="text"
            id={userNameId}
            name="name"
            value={usernName}
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
            title="Email may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
            title="Password must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </List>
      </Item>
      <Btn type="submit" disabled={isAddLoading}>
        Registration
      </Btn>
    </Form>
  );
}

export default RegistrationForm;

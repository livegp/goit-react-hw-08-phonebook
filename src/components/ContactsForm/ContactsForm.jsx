import { useState } from 'react';
import { toast } from 'react-toastify';

import { Button, Form, List } from './ContactsForm.styled';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../redux/contactsSlice';

function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [addContact, { isLoading: isAddLoading }] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const handleChange = ({ target: { name: inputName, value } }) => {
    if (inputName === 'name') {
      setName(value);
    } else if (inputName === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = async event_ => {
    event_.preventDefault();

    const isNameExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (isNameExist) {
      alert(`${name} is already in contacts`);
      return;
    }

    const isNumberExist = contacts.some(contact => contact.number === number);

    if (isNumberExist) {
      alert(`The number ${number} is already in contacts`);
      return;
    }

    const newData = { name, number };

    try {
      await addContact(newData);
      reset();
    } catch (error) {
      toast.error('Error adding contact:', error);
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ul>
        <List>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
        </List>
        <List>
          <label>
            Number
            <input
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="number number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
        </List>
      </ul>
      <Button type="submit" disabled={isAddLoading}>
        {isAddLoading ? 'Adding...' : 'Add contact'}
      </Button>
    </Form>
  );
}

export default ContactsForm;

import { nanoid } from 'nanoid';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { Btn, Form, Item, List } from './ContactForm.styled';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../redux/contactsSlice';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const [addContact, { isLoading: isAddLoading }] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const nameId = nanoid();
  const phoneId = nanoid();

  const handleChange = ({ target: { name: inputName, value } }) => {
    if (inputName === 'name') {
      setName(value);
    } else if (inputName === 'phone') {
      setPhone(value);
    }
  };

  const handleSubmit = async evt => {
    evt.preventDefault();

    const isNameExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (isNameExist) {
      alert(`${name} is already in contacts`);
      return;
    }

    const isPhoneExist = contacts.some(contact => contact.phone === phone);

    if (isPhoneExist) {
      alert(`The number ${phone} is already in contacts`);
      return;
    }

    const newData = { name, phone };

    try {
      await addContact(newData);
      reset();
    } catch (error) {
      toast.error('Error adding contact:', error);
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Item>
        <List>
          <label htmlFor={nameId}>Name</label>
          <input
            type="text"
            id={nameId}
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </List>
        <List>
          <label htmlFor={phoneId}>Phone</label>
          <input
            type="tel"
            id={phoneId}
            name="phone"
            value={phone}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </List>
      </Item>
      <Btn type="submit" disabled={isAddLoading}>
        {isAddLoading ? 'Adding...' : 'Add contact'}
      </Btn>
    </Form>
  );
}

export default ContactForm;

import { useEffect } from 'react';
import { TiDeleteOutline, TiEdit } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';

import { Head, Table } from './ContactsList.styled';
import {
  deleteContact,
  requestContacts,
  selectContacts,
  selectContactsError,
  selectContactsIsLoading,
} from '../../redux/contactsReducer';
import { selectFilter } from '../../redux/filterSlice';
import Loader from '../Loader/Loader';

function ContactsList() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(requestContacts());
  }, [dispatch]);

  const visibleContactList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  if (visibleContactList.length === 0) {
    return <p>No contacts</p>;
  }

  const handleDelete = contacId => {
    dispatch(deleteContact(contacId));
  };

  const showContacts = Array.isArray(contacts) && contacts.length > 0;

  return (
    <>
      <Table>
        <Head>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>
              <TiEdit size={20} />
            </th>
            <th>
              <TiDeleteOutline size={20} />
            </th>
          </tr>
        </Head>
        <tbody>
          {showContacts &&
            visibleContactList.map(({ id, name, number }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{number}</td>
                <td>
                  <button type="button">
                    <TiEdit size={20} />
                  </button>
                </td>
                <td>
                  <button type="button" onClick={() => handleDelete(id)}>
                    <TiDeleteOutline size={20} />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      {isLoading && <Loader />}
    </>
  );
}

export default ContactsList;

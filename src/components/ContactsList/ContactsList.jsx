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

function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(requestContacts());
  }, [dispatch]);

  const handleDelete = contacId => {
    dispatch(deleteContact(contacId));
  };

  return (
    <Table>
      <Head>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>
            <TiEdit size={20} />
          </th>
          <th>
            <TiDeleteOutline size={20} />
          </th>
        </tr>
      </Head>
      <tbody>
        {contacts.map(({ id, name, phone }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{phone}</td>
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
  );
}

export default ContactsList;

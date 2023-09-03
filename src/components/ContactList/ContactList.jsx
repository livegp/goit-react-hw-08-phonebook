import { TiDeleteOutline, TiEdit } from 'react-icons/ti';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { Head, Table } from './ContactList.styled';
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from '../../redux/contactsSlice';
import { selectFilter } from '../../redux/filterSlice';
import Loader from '../Loader/Loader';

function ContactList() {
  const filter = useSelector(selectFilter);

  const {
    data: contacts,
    error: isGetError,
    isLoading: isGetLoading,
  } = useGetContactsQuery();

  const [deleteContact, { isLoading: isDeleteLoading }] =
    useDeleteContactMutation();

  const handleDelete = async id => {
    try {
      await deleteContact(id);
      toast.success('Contact deleted successfully');
    } catch (error) {
      toast.error('Error deleting contact:', error);
    }
  };

  if (isGetLoading) {
    return <Loader />;
  }

  if (isGetError) {
    return toast.error('Error deleting contact:', isGetError);
  }

  const visibleContactList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  if (!visibleContactList.length) {
    return <p>No contacts</p>;
  }

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
        {visibleContactList.map(({ id, name, phone }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{phone}</td>
            <td>
              <button type="button">
                <TiEdit size={20} />
              </button>
            </td>
            <td>
              <button
                type="button"
                disabled={isDeleteLoading}
                onClick={() => handleDelete(id)}>
                <TiDeleteOutline size={20} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ContactList;

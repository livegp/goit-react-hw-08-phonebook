import ContactsFilter from '../components/ContactsFilter/ContactsFilter';
import ContactsForm from '../components/ContactsForm/ContactsForm';
import ContactsList from '../components/ContactsList/ContactsList';

function Contacts() {
  return (
    <>
      <ContactsForm />
      <ContactsFilter />
      <ContactsList />
    </>
  );
}

export default Contacts;

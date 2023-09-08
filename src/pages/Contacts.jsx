import { Helmet } from 'react-helmet';

import ContactsFilter from '../components/ContactsFilter/ContactsFilter';
import ContactsForm from '../components/ContactsForm/ContactsForm';
import ContactsList from '../components/ContactsList/ContactsList';

function Contacts() {
  return (
    <>
      <Helmet>
        <title>Contacts book</title>
      </Helmet>
      <ContactsForm />
      <ContactsFilter />
      <ContactsList />
    </>
  );
}

export default Contacts;

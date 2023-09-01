import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';

function Home() {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
}

export default Home;

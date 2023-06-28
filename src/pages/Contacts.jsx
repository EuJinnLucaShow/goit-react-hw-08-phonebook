import { Helmet, HelmetProvider } from 'react-helmet-async';

import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { Heading2 } from '../components/App.styled';

function Contacts() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Phonebook📱</title>
        </Helmet>
        <ContactForm />
        <Heading2>Contacts</Heading2>
        <Filter />
        <ContactList />
      </HelmetProvider>
    </>
  );
}

export default Contacts;

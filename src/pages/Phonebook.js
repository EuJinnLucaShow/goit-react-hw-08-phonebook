import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { Title, Heading2 } from '../components/App.styled';

function Phonebook() {
  return (
    <>
      <Title>Phonebook📱</Title>
      <ContactForm />
      <Heading2>Contacts</Heading2>
      <Filter />
      <ContactList />
    </>
  );
}

export default Phonebook;

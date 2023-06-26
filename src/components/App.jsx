import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import AppBar from './AppBar/AppBar';
import { Container, Title, Heading2 } from './App.styled';

function App() {
  return (
    <Container>
      <AppBar />
      <Title>Phonebook📱</Title>
      <ContactForm />
      <Heading2>Contacts</Heading2>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;

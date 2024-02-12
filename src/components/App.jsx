import ContactForm from './ContactForm/ContactForm';
import { Title } from './Title.styled';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';




const App = () => {
  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </>
  );
};


export default App;

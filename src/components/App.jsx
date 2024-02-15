import ContactForm from './ContactForm/ContactForm';
import { Title } from './Title.styled';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Div } from './App.styled';




const App = () => {
  return (

    <Div>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Div>
  );
};


export default App;

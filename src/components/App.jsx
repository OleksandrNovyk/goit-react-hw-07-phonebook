import { useSelector } from 'react-redux';
import { Container, MainHeader, SecondHeader } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Loader } from './Loader/Loader';

export const App = () => {
  const loader = useSelector(state => state.contacts.isLoading);
  return (
    <Container>
      {loader && <Loader />}
      <MainHeader>Phonebook</MainHeader>
      <ContactForm />
      <SecondHeader>Contacts</SecondHeader>
      <Filter />
      <ContactList />
    </Container>
  );
};

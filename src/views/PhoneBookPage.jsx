import { PhoneSection } from '../components/PhoneForm/PhoneForm';
import { ContactForm } from  '../components/Contacts/ContactSection';
import { FilterSection } from '../components/Filter/Filter';
import { nanoid } from "nanoid";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spiner } from '../components/Spiner/Spiner';
import { ToastContainer, toast } from 'react-toastify';
import { createContact, getContacts } from '../redux/contacts/contactOperation';
import { changeFilter } from '../redux/contacts/contactSlice';
import 'react-toastify/dist/ReactToastify.css';

export default function PhoneBookPage() {

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const isLoading = useSelector(state => state.contacts.createContactLoading);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  
  const onFormSubmit = ({name, number }) => {
      const isNameOnList = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (isNameOnList) {
        toast.warn(`${name} is already in contacts.`, {autoClose: 1000})
        return;
    }
    else if (!isNameOnList) {
      dispatch(createContact({ id: nanoid(), name, number }));
      toast.success(`Contact ${name} added to the Phone List`);
      }
     };

  const onChangeFilter = event => {
    dispatch(changeFilter(event.target.value));
  }

  const getFilteredContact = () => {
    const newContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase()));
    return newContacts;
  }

    return (
      <>
        <h1 className='primaryTitle'>Phonebook</h1>
        <PhoneSection onSubmit={onFormSubmit} />
        <FilterSection title={"Find contacts by name"} value={filter} onChange={onChangeFilter}/>
        <h2 className='secondaryTitle'>Contacts</h2>
        {isLoading
          ? <Spiner />
          : (contacts === undefined)||((contacts.length === 0))
            ? (<h3 className='warningText'>No Contects in your PhoneBook</h3>)
            : (<ContactForm contacts={getFilteredContact()} />)}
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    );
}
import { PhoneSection } from './PhoneForm/PhoneForm';
import { ContactForm } from './Contacts/ContactSection';
import { FilterSection } from './Filter/Filter';
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from 'react-redux';
import { changeFiler } from '../redux/filterSlice';
import { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation } from 'redux/contactApi';
import { Spiner } from '../components/Spiner/Spiner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  const { data: contacts, error, isLoading} = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const dispatch = useDispatch();
  const filterState = useSelector(state => state.filter);
  
  const onFormSubmit = ({ name, number }) => {
      const isNameOnList = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (isNameOnList) {
        toast.warn(`${name} is already in contacts.`, {autoClose: 1000})
        return;
      }
        addContact({id: nanoid(), name, number})
     };
  
  const [deleteContact, { isLoading: isDeleting } ] = useDeleteContactMutation();

  const onChangeFilter = event => {
    dispatch(changeFiler(event.target.value));
  }

  const getFilteredContact = () => {
    const newContacts = contacts.filter(contact =>
      contact.name.toString().toLowerCase().includes(filterState.toLowerCase()));
    return newContacts;
  }

    return (
      <>
        <h1 className='primaryTitle'>Phonebook</h1>
        <PhoneSection onSubmit={onFormSubmit} />
        <FilterSection title={"Find contacts by name"} value={filterState} onChange={onChangeFilter}/>
        <h2 className='secondaryTitle'>Contacts</h2>
        {error && <>
          {toast.error(`Somethig went wrong, please reload the page`, { autoClose: 1000 })}
        </>}
        {isLoading || isDeleting
          ? <Spiner />
          : (contacts === undefined)||((contacts.length === 0))
            ? (<h3 className='warningText'>No Contects in your PhoneBook</h3>)
            : (<ContactForm contacts={getFilteredContact()} onDeleteContact={deleteContact} />)}
        <ToastContainer />
      </>
    );
}
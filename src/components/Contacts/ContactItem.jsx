import { Contact, DeleteButton } from "./ContactSection.styled";
import { removeContact } from '../../redux/contacts/contactOperation';
import { useSelector, useDispatch } from 'react-redux';
//import { useDeleteContactMutation } from '../../redux/contactApi';

export const ContactItem = ({ id, name, number }) => {
	const dispatch = useDispatch();

	//const [deleteContact] = useDeleteContactMutation();
	return (
		<Contact>
			<p>{name}</p>
			<p>{number}</p>
			<DeleteButton type="button" id={id} onClick={() => dispatch(removeContact(id))}>Delete</DeleteButton>
		</Contact>
	);
}
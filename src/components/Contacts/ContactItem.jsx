import { Contact, DeleteButton } from "./ContactSection.styled";
import { useDispatch } from 'react-redux';
import {
  deleteContact,
} from '../../redux/contacts/contactOperation';
//import { useDeleteContactMutation } from '../../redux/contactApi';

export const ContactItem = ({ id, name, number }) => {
	const dispatch = useDispatch();

	return (
		<Contact>
			<p>{name}</p>
			<p>{number}</p>
			<DeleteButton type="button" id={id} onClick={() => dispatch(deleteContact(id))}>Delete</DeleteButton>
		</Contact>
	);
}
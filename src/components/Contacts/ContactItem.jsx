import { Contact, DeleteButton } from "./ContactSection.styled";
//import { useDeleteContactMutation } from '../../redux/contactApi';

export const ContactItem = ({ id, name, number, onDeleteContact}) => {
	//const [deleteContact] = useDeleteContactMutation();
	return (
		<Contact>
			<p>{name}</p>
			<p>{number}</p>
			<DeleteButton type="button" id={id} onClick={() => onDeleteContact(id)}>Delete</DeleteButton>
		</Contact>
	);
}
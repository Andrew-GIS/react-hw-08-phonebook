import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { userRegistration } from '../../redux/auth/auth-operation';
import { RegisterForm, MainTitle, SecondaryTitle , NavigateBtn, Lable} from './RegisterView.styled';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChange = ({ target: { name, value } }) => {
    switch (name) {
    	case 'name':
        	return setName(value);
		case 'email':
			return setEmail(value);
		case 'password':
			return setPassword(value);
		default:
			toast.error(`Unfortunatly I can't register ${name} user`)
			return;
		}	
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(userRegistration({ name, email, password }));
		reset();
	}

	const reset = () => {
		setName('');
    	setEmail('');
    	setPassword('');
	}
	
	return (
		<div>
			<MainTitle>Registration</MainTitle>
			<SecondaryTitle>Please, inpute your data to sign up</SecondaryTitle>
      <RegisterForm onSubmit={handleSubmit} autoComplete="off">
        <Lable>Name
					<input
						type="text"
						name="name"
						value={name}
						onChange={onChange}>
					</input>
				</Lable>
				<Lable>Email
					<input
						type="email"
						name="email"
						value={email}
						onChange={onChange}>
					</input>
				</Lable>
				<Lable>Password
					<input
						type="password"
						name="password"
						value={password}
						onChange={onChange}>
					</input>
				</Lable>
				<button type='submit'>REGISTER ME</button>
			</RegisterForm>
			<NavigateBtn to='/login'>To Login</NavigateBtn>
		</div>
	);
}
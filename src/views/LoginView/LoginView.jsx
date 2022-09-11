import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { userLogin } from '../../redux/auth/auth-operation';
import { LoginForm, MainTitle, SecondaryTitle, NavigateBtn, Lable } from 'views/LoginView/LoginView.styled';

export default function LoginView() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleChange = ({ target: { name, value } }) => {
		switch (name) {
			case 'email':
				return setEmail(value);
			case 'password':
				return setPassword(value);
			default:
				toast.error(`case ${name} doesn't support`);
				return;
		}	
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(userLogin({ email, password }));
		reset();
	}

	const reset = () => {
		setEmail('');
		setPassword('');
	}
	
	return (
		<div>
			<MainTitle>Login</MainTitle>
			<SecondaryTitle>Please, inpute your data to continue</SecondaryTitle>
			<LoginForm onSubmit={handleSubmit} autoComplete="off">
				<Lable>Email
					<input
						type="email"
						name="email"
						value={email}
						onChange={handleChange}>
					</input>
				</Lable>
				<Lable>Password
					<input
						type="password"
						name="password"
						value={password}
						onChange={handleChange}>
					</input>
				</Lable>
				<button type='submit'>Submit</button>
			</LoginForm>
			<NavigateBtn to='/register'>Registration</NavigateBtn>
		</div>
	);
}
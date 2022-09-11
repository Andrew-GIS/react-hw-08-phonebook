import React from "react";
import {Container, MainTitle, NavigateContainer, NavigateBtn } from './NotFoundPage.styled';

export default function NotFoundPage() {
	return (
		<Container>
			<MainTitle>This is the PhoneBook website, please Login to Continue</MainTitle>
			<NavigateContainer>
				<NavigateBtn to='/login'>LogIn</NavigateBtn>
				<NavigateBtn to='/register'>Registration</NavigateBtn>
			</NavigateContainer>
		</Container>
	);
};
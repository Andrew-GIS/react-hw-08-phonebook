import React from "react";
import {Container, MainTitle } from './AboutPage.styled';

export default function NotFoundPage() {
	return (
		<Container>
			<MainTitle>This is the PhoneBook website, you are welcome to use this product, soon I will be able to improve this application - and who knows what will be after that.</MainTitle>
			<h2>Manual of use</h2>
			<ol>
				<li>To use this application you should register in the system, please - use the "Register" button</li>
				<li>Log in to the system, please - use the "Login" button</li>
				<li>Add your personal Contact List to your account</li>
				<li>Manage your Contacts at any time</li>
			</ol>
			<h3>Thank you dear Friend</h3>
		</Container>
	);
};
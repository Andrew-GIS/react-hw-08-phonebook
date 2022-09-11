import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const RegisterForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid blue;
padding: ${p => `${p.theme.space[4]}px`};
margin: 0 auto 0 auto;
width: 30%;
background-color: ${p => `${p.theme.colors.wheat}`} ;
`;

export const MainTitle = styled.h1`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const SecondaryTitle = styled.h2`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const NavigateBtn = styled(NavLink)`
position: absolute;
top: 10px;
right: 10px;
display: flex;
justify-content: center;
align-items: center;
margin-right: auto;
margin-left: auto;
border-radius: 3px;
width: 120px;
height: 50px;
text-decoration: none;
text-transform: uppercase;
background-color: #3f51b5;
color: white;
box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
		0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
`;
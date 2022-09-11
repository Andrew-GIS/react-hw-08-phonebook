import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 300px;
margin-bottom: auto;
`;

export const MainTitle = styled.h1`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const NavigateContainer = styled.div`
// position: absolute;
// top: 10px;
// right: 10px;
width: 400px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-right: auto;
margin-left: auto;
`;

export const NavigateBtn = styled(NavLink)`
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
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrap = styled.div`
display: flex;
`;

export const Link = styled(NavLink)`
  display: flex;
	justify-content: center;
	align-items: center;
	width: 92px;
	height: 42px;
	border-radius: 5px;
	border: red;
	text-decoration: none;
	text-transform: uppercase;
	background-color: #3f51b5;
	color: white;
	box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
		0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  &:last-child {
    margin-left: 20px;
  }

  &.active {
    background-color: ${p => `${p.theme.colors.wheat}`};
    color:  ${p => `${p.theme.colors.black}`};
  }
`;
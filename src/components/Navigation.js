import React from 'react';
import { useAuth } from '../hooks/useAuth';
import styled from 'styled-components';
import { Link } from '../components/AppBar/AuthNav.styled'; 

const Nav = styled.nav`
    display: flex;
		justify-content: center;
		align-items: center;
`;

export default function Navigation() {
  const { isLoggedIn } = useAuth();
  return (
    <Nav>
      <Link to="/">Main Page</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </Nav>
  );
}
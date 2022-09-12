import React from 'react';
import {Wrap, Link} from './AuthNav.styled'

export default function AuthNav() {
  return (
    <Wrap>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </Wrap>
  );
}
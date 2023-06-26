import React from 'react';
import { StylesLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <div>
      <StylesLink to="/registration">Registration</StylesLink>
      <StylesLink to="/login">Login</StylesLink>
    </div>
  );
}

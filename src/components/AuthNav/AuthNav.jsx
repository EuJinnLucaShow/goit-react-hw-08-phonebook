import React from 'react';
import { StylesLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <div>
      <StylesLink to="">Registration</StylesLink>
      <StylesLink to="">Login</StylesLink>
    </div>
  );
}

import React from 'react';
import { Links } from './Navigation.styled';

const Navigation = () => (
  <nav>
    <Links to="/" end>
      Home
    </Links>
    <Links to="/phonebook">Phonebook</Links>
  </nav>
);

export default Navigation;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Links = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  margin-bottom: 6px;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 700;
  color: black;

  &.active {
    background-color: #e0e0e0;
  }
`;

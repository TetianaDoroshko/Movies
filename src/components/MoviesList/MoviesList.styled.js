import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ItemsLink = styled(NavLink)`
  text-decoration: none;
  color: darkblue;

  &.active {
    color: crimson;
  }
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  box-shadow: rgba(0, 0, 0, 0.4) 0px 6px 5px -3px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const Navlink = styled(NavLink)`
  display: block;
  padding: 15px 10px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  color: black;

  &.active {
    color: crimson;
  }
`;

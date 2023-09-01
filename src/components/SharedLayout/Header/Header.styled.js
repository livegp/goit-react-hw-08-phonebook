import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderBox = styled.header`
  position: sticky;
  top: 0;
  background-color: #3b5998;
  z-index: 10;

  .header .menu-btn:checked ~ .nav {
    position: absolute;
    top: -50%;
    /* left: -50%; */
    transform: translate(-50%, 50vh);
  }

  .header .menu-btn:checked ~ .header__login-btn {
    transform: translateY(0);
  }

  .header .menu-icon {
    cursor: pointer;
    position: relative;
    user-select: none;
    display: none;
    background: #ffecb3;
    border-radius: 4px;
    padding: 16px;
    order: 5;
  }

  .header .menu-icon .nav-icon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 18px;
  }

  .header .menu-icon .nav-icon:before,
  .header .menu-icon .nav-icon:after {
    background: #333;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }

  .header .menu-icon .nav-icon:before {
    top: 5px;
  }

  .header .menu-icon .nav-icon:after {
    top: -5px;
  }

  .header .menu-btn {
    display: none;
    order: 6;
  }

  .header .menu-btn:checked ~ .menu-icon .nav-icon {
    background: transparent;
  }

  .header .menu-btn:checked ~ .menu-icon .nav-icon:before {
    transform: rotate(-45deg);
    top: 0;
  }

  .header .menu-btn:checked ~ .menu-icon .nav-icon:after {
    transform: rotate(45deg);
    top: 0;
  }
`;

export const Container = styled.div`
  max-width: 1160px;
  padding: 25px 10px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;
  padding: 15px;
  gap: 5px;
`;

export const Logo = styled.div`
  order: 1;
  flex-grow: 0;

  a {
    display: flex;
  }

  p {
    background-color: transparent;
    padding: 8px;
    color: #dfe3ee;
    font-size: 20px;
    font-weight: bold;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  svg {
    display: block;
    width: 40px;
    height: 40px;
    fill: #dfe3ee;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    p,
    svg {
      fill: #f7f7f7;
      color: #f7f7f7;
    }
  }
`;

export const Nav = styled.nav`
  display: block;
  margin-top: 0;
  position: static;
  order: 2;
  flex-grow: 1;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    height: 100%;
    gap: 5px;
  }
`;

export const StyleNavLink = styled(NavLink)`
  display: block;
  background-color: transparent;
  border-radius: 4px;
  border: 2px solid transparent;
  padding: 8px;
  order: 0;
  color: #dfe3ee;
  font-size: 20px;
  font-weight: bold;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #f7f7f7;
    border: 2px solid #f7f7f7;

    &.active {
      background-color: #f7f7f7;
      border: 2px solid #f7f7f7;
    }
  }

  &.active {
    background-color: #dfe3ee;
    color: #3b5998;
  }
  /* @media (width <= 576px) {
    display: none;
  } */
`;

export const LoginBtn = styled.button`
  order: 5;
  margin-top: 0;
  background: transparent;
  border-width: 0;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  display: block;
  flex-basis: auto;
  align-items: center;

  svg {
    display: block;
    width: 40px;
    height: 40px;
    stroke: #dfe3ee;
  }

  &:hover {
    svg {
      stroke: #f7f7f7;
    }
  }
`;

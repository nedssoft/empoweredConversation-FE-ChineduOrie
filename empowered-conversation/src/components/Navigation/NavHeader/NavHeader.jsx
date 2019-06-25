import React from "react";
import propTypes from "prop-types";
import Logo from '../Logo/Logo';

import { NavHeader, Hamburger, HamburgerIcon } from './Styles'

export default function Header({ toggle }) {
  return (
    <NavHeader>
      <Logo />
      <Hamburger onClick={toggle}>
        <HamburgerIcon />
      </Hamburger>
    </NavHeader>
  );
}

Header.propTypes = {
  toggle: propTypes.func.isRequired
};

import React from "react";
import propTypes from "prop-types";
import { Ul } from './Styles';
import NavItem from "./NavItem";

export default function NavItems({ flex }) {
  return (
    <Ul flex={flex}>
      <NavItem exact link="/">
        Home
      </NavItem>
    </Ul>
  );
}

NavItems.defaultProps = {
  flex: false
};
NavItems.propTypes = {
  flex: propTypes.bool
};

import React from "react";
import propTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Ul } from "./Styles";
import NavItem from "./NavItem";

function NavItems({ flex, location}) {
  
  return (
    <Ul flex={flex}>
      <NavItem exact link="/">
        Home
      </NavItem>
      {location.pathname.includes("/conversation/new") && (
        <NavItem link="/conversation/new">Conversation</NavItem>
      )}
      {location.pathname.includes("/conversation/resources") && (
        <NavItem link="/conversation/resources">Resources</NavItem>
      )}
    </Ul>
  );
}

NavItems.defaultProps = {
  flex: false
};
NavItems.propTypes = {
  flex: propTypes.bool,
  location: propTypes.objectOf(propTypes.any).isRequired
};

export default withRouter(NavItems);

import React from "react";
import propTypes from 'prop-types';
import { Li } from './Styles';
import { CustomNavLink } from '../../styled/reusables'

export default function NavItem({ children, link, exact }) {
  return (
    <Li>
      <CustomNavLink exact={exact} to={link}>
        {children }
      </CustomNavLink>
    </Li>
  );
}

NavItem.defaultProps = {
  exact: false,
}
NavItem.propTypes = {
  children: propTypes.node.isRequired,
  link: propTypes.string.isRequired,
  exact: propTypes.bool,
}

import React from "react";
import { Logo, LogoImg } from "./Styles"
import { CustomLink } from '../../styled/reusables'

import logo from "../../../img/EmpoweredConversation-Logo-Md.png";

export default function NavLogo() {
  return (
    <Logo>
      <CustomLink to="/">
        <LogoImg src={logo} alt="logo" />
      </CustomLink>
    </Logo>
  );
}

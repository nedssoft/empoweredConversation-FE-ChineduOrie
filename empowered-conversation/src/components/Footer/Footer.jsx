import React from "react";
import { FooterContainer, Ul } from "./Style";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  CustomLink
} from "../styled/reusables";

export default function Footer() {
  return (
    <FooterContainer>
      <Ul>
        <li>
          <CustomLink to="#">
            <FacebookIcon />
          </CustomLink>
        </li>
        <li>
          <CustomLink to="#">
            <TwitterIcon />
          </CustomLink>
        </li>
        <li>
          <CustomLink to="#">
            <LinkedinIcon />
          </CustomLink>
        </li>
        <li>
          <CustomLink to="#">
            <InstagramIcon />
          </CustomLink>
        </li>
      </Ul>
      <p>&copy; Empowered Conversations 2019. All rights reserved.</p>
    </FooterContainer>
  );
}

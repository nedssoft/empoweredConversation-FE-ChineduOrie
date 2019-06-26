import styled, { css } from "styled-components";
import { NavLink, Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagram,
  FaSpinner
} from "react-icons/fa";
import { primary as primary_color, black as black_color } from "./variables";

export const transition = css`
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  -ms-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
`;

export const background = css`
  background: linear-gradient(
    145deg,
    rgba(36, 180, 165, 1) 0%,
    rgba(143, 237, 194, 1) 100%
  );
`;
export const responsiveWidth = css`
  @media screen and (max-width: 768px) {
    width: 90%;
    max-width: 90%;
  }
  @media screen and (max-width: 499px) {
    width: 90%;
    max-width: 90%;
  }
`;

export const CustomNavLink = styled(NavLink)`
  color: ${black_color};
  font-size: 1.6rem;
  text-decoration: none;
  line-height: 1.5;
  text-transform: uppercase;
  border-bottom-width: 0;
  transition: border-bottom-width 650ms;
  &:hover,
  &.active {
    border-bottom: 1px solid ${primary_color};
    color: ${primary_color};
    border-bottom-width: 100%;
  }
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
`;
const iconStyle = css`
  font-size: 6rem;
  color: #fff;
  padding: 0.8rem;
  ${transition};
`;

export const SpinnerIcon = styled(FaSpinner)`
  ${iconStyle};
`;
export const FacebookIcon = styled(FaFacebookSquare)`
  ${iconStyle};
  &:hover {
    color: #3b579d;
    ${transition};
  }
`;
export const TwitterIcon = styled(FaTwitterSquare)`
  ${iconStyle};
  &:hover {
    color: #29aae1;
    ${transition};
  }
`;

export const LinkedinIcon = styled(FaLinkedin)`
  ${iconStyle};
  &:hover {
    color: #0374b3;
    ${transition};
  }
`;
export const InstagramIcon = styled(FaInstagram)`
  ${iconStyle};
  &:hover {
    color: #bf317d;
    ${transition};
  }
`;

export const flexColum = css`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const Submit = styled.button`
  margin: auto;
  margin-top: 4rem;
  width: 18rem;
  padding: 0.8rem;
  border-radius: 50px;
  background-image: linear-gradient(to left, #24b4a5, #20c997);
  border: none;
  font-size: 1.8rem;
  color: white;
  cursor: pointer;
  transition: background-image 650ms ease-in-out, width 650ms;
  &:hover {
    background-image: linear-gradient(to right, #24b4a5, #20c997);
    width: 20rem;
  }
`;

import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { primary as primary_color } from "../../styled/variables";

export const NavHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 500px) {
    transform: initial;
    position: relative;
    left: 0;
    right: 0;
  }
`;
export const Hamburger = styled.div`
  display: none;
  border: 1px solid ${primary_color};
  border-radius: 4px;
  margin-right: 4rem;
  padding: 0.2rem 0.8rem;
  cursor: pointer;
  @media (max-width: 500px) {
    display: inline-block;
  }
`;
export const HamburgerIcon = styled(FaBars)`
  color: ${primary_color};
  font-size: 2rem;
`;

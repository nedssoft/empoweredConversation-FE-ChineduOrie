import styled from "styled-components";
import { background, primary, responsiveWidth } from '../styled/reusables'

export const Wrapper = styled.div`
  ${background};
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 50%;
  background: #fff;
  position: relative;
  padding: 10rem 2rem;
  box-shadow: 0 1px 1.5rem rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  z-index: 1;
  ${responsiveWidth};
`;

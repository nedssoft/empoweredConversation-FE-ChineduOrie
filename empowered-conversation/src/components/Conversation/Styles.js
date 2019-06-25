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

export const Img = styled.img`
  width: 50px;
  height: 50px;
`;
export const H3 = styled.h3`
  color: white;
  font-size: 2.5rem;
  color: ${primary};
`;
export const FormHeader = styled.div`
  width: 100%;
  top: 2.5rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  transform: translateY(5rem);
`;
export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1rem;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

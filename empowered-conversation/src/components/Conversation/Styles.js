import styled from "styled-components";
import { background, responsiveWidth } from '../styled/reusables'
import { primary, danger } from '../styled/variables'

export const Wrapper = styled.div`
  ${background};
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-top: 10rem;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 50%;
  background: #fff;
  position: relative;
  margin: auto;
  padding: 10rem 2rem;
  box-shadow: 0 1px 1.5rem rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
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
export const InputGroup = styled.div`
  width: 48%;
  position: relative;
  @media screen and (max-width: 499px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const Bar = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  background: ${props => props.invalid ? danger : 'rgba(0, 0, 0, 0.1)'};
  width: 100%;
  height: 1px;
  &::before {
    content: "";
    position: absolute;
  background: ${props => props.error ? 'red': primary };
    width: 0;
    height: 2px;
    transition: width 650ms;
  }
`;
export const Label = styled.label`
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.4);
  display: none;
`;
export const Input = styled.input`
  position: relative;
  width: 100%;
  padding: 0.8rem 0;
  outline: none;
  border: none;
  font-size: 1.8rem;
  color: ${primary};
  &:focus + ${Bar}::before {
    width: 100%;
  }
  &:focus + ${Label} {
    display: block;
  }
  &::placeholder {
    color: ${primary};
    opacity: 0.3;
  }
`;
export const Select = styled.select`
  width: 100%;
  font-size: 1.8em;
  padding: 0.8rem 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: rgba(0,0,0, .2);
  outline: none;
  border: none;
  color: ${primary};
  opacity: 0.6;
  background: white;
  &:hover + ${Bar}::before {
    width: 100%;
  }

  option {
    padding: 0.8rem 0;
  }

`;

export const Submit = styled.button`
  margin: auto;
  margin-top: 4rem;
  width: 18rem;
  padding: 0.8rem;
  border-radius: 50px;
   background-image: linear-gradient(to left, #24b4a5,#20c997 );
  border: none;
  font-size: 1.8rem;
  color: white;
  cursor: pointer;
  transition: background-image 650ms ease-in-out, width 650ms;
  &:hover {
    background-image: linear-gradient(to right, #24b4a5,#20c997 );
    width: 20rem;
  }
`

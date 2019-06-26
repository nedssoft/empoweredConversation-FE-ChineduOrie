import styled from "styled-components";
import { Link } from "react-router-dom";
import { background } from "../styled/reusables";
import { secondary } from '../styled/variables'

export const Container = styled.div`
  ${background};
  width: 100%;
  min-height: 100%;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  /* padding: 1rem; */
  align-items: center;
  color: #fff;
  h1 {
    font-size: 4rem;
    text-align: center;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 2rem;
  }
  p {
    font-size: 2rem;
    font-style: italic;
    text-align: center;
  }
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 2rem auto;
  width: 60%;
  position: relative;
  span {
    font-style: italic;
    text-decoration: underline;
    font-size: 2rem;
    color: ${secondary};
    align-self: flex-end;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const ActionLink = styled(Link)`
  margin: 2rem auto;
  font-size: 2.5rem;
  color: ${secondary};
`

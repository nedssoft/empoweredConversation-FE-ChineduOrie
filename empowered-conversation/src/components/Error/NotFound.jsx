import React from "react";
import { Container} from './Styles';
import { ActionLink } from '../styled/reusables'

export default function NotFound() {
  return (
    <Container>
      <h1>
        <span>4</span> 
        <span>0</span> 
        <span>4</span>
      </h1>
      <p>It Looks Like Someone is Lost!</p>
      <ActionLink to="/">Home</ActionLink>
    </Container>
  );
}

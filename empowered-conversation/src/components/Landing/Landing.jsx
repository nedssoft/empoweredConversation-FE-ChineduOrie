import React from "react";
import { Container, TextBox, ActionLink } from "./Styles";

export default function NotFound() {
  return (
    <Container>
      <h1>Empowered Conversation</h1>
      <h3>When Word Matters</h3>
      <TextBox>
        <p>
          Healing ourselves may be some of the hardest work we do in our lives.
          But to move beyond our pain, to no longer be defined by it, we have to
          feel it. There is no other way.
        </p>
      </TextBox>
      <TextBox>
        <p> I am not what happened to me. I am what I choose to become</p>
        <span>Carl Jung</span>
      </TextBox>
      <TextBox>
        <p>
          You are not a victim for sharing your story. You are a survivor
          setting the world on fire with your truth. And you never know who
          needs your light, your warmth, and raging courage
        </p>
        <span> Alex Elle</span>
      </TextBox>
      <ActionLink to="/conversation/new">Want to talk to someone?</ActionLink>
    </Container>
  );
}

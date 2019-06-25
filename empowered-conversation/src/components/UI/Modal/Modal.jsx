import React from "react";
import propTypes from "prop-types";

import {
  Backdrop,
  Container,
  Title,
  CloseButton,
  ContinueBtn,
  CancelBtn,
  Body,
  Footer,
  Header
} from "./Styles";

function Modal({ children, show, toggle, modalTitle, clicked, modalType }) {
  let footerContent = <ContinueBtn onClick={clicked}>Continue</ContinueBtn>;
  if (!modalType === "ok") {
    footerContent = (
      <React.Fragment>
        <ContinueBtn onClick={clicked}>Continue</ContinueBtn>
        <CancelBtn onClick={toggle}>Cancel</CancelBtn>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Backdrop show={show} onClick={toggle} />
      <Container show={show}>
        <Header>
          <Title>{modalTitle}</Title>
          <CloseButton onClick={toggle}>X</CloseButton>
        </Header>
        <Body>{children}</Body>
        <Footer>{footerContent}</Footer>
      </Container>
    </React.Fragment>
  );
}
Modal.defaultProps = {
  show: false,
  modalTitle: "",
  clicked: () => {},
  modalType: null,
};
Modal.propTypes = {
  children: propTypes.node.isRequired,
  show: propTypes.bool,
  toggle: propTypes.func.isRequired,
  modalTitle: propTypes.string,
  clicked: propTypes.func,
  modalType: propTypes.string,
};
export default Modal;

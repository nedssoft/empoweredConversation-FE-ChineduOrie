import React from "react";
import SpinnerWrapper from "./Styles";

export default function Spinner() {
  /** Got from https://loading.io/css/ */
  return (
    <SpinnerWrapper>
      <div className="lds-spinner">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </SpinnerWrapper>
  );
}

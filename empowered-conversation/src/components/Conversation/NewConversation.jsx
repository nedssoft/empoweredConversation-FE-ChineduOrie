import React from "react";
import {
  Wrapper,
  Container,
  Img,
  H3,
  FormHeader,
  Form,
  Row,
  InputGroup,
  Input,
  Bar,
  Label,
  Select,
  Submit
} from "./Styles";

import logo from "../../img/EmpoweredConversation-Logo-Md.png";
import Modal from "../UI/Modal/Modal";

class NewConversation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        survivorName: "",
        survivorPhone: "",
        ffName: "",
        ffPhone: "",
        categoryId: ""
      },
      errors: {
        survivorName: "",
        survivorPhone: "",
        ffName: "",
        ffPhone: "",
        categoryId: "Select the category of the Assault"
      },
      formValid: true,
      extractedErrors: null,
      showErrorModal: false,
      showConsentModal: false
    };
  }

  inputChangeHandler = e => {
    const { name, value } = e.target;
    const { errors } = this.state;
    switch (name) {
      case "survivorName":
        errors.survivorName =
          value.length < 3 ? "Name cannot be less than 3 characters" : "";
        break;
      case "survivorPhone":
        errors.survivorPhone =
          value.length < 6 ? "Enter a valid phone number" : "";
        break;
      case "ffName":
        errors.ffName =
          value.length < 3 ? "Name cannot be less than 3 characters" : "";
        break;
      case "ffPhone":
        errors.ffPhone = value.length < 6 ? "Enter a valid phone number" : "";
        break;
      case "categoryId":
        errors.categoryId =
          value === "" ? "Select the category of the Assault" : "";
        break;
      default:
        break;
    }

    this.setState(prevState => ({
      ...prevState,
      errors,
      form: {
        ...prevState.form,
        [name]: value
      }
    }));
  };

  checkFormValidity = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };
  onKeydown = ({ target }) => {
    const label = target.parentNode.querySelector("label");
    label.style.display = "block";
  };
  submitHandler = e => {
    e.preventDefault();
    const { errors } = this.state;
    if (!this.checkFormValidity(errors)) {
      const extractedErrors = Object.values(errors).filter(err => err !== "");
      this.setState(prevState => ({
        ...prevState,
        formValid: false,
        extractedErrors: extractedErrors,
        showErrorModal: true
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        showConsentModal: true
      }));
    }
  };
  toggleErrorModal = () => {
    this.setState(prevState => ({
      ...prevState,
      showErrorModal: false
    }));
  };
  toggleConsentModal = () => {
    this.setState(prevState => ({
      ...prevState,
      showConsentModal: false
    }));
  };
  submitConversation = () => {
    const { form } = this.state;
    console.log(form);
    alert("conversation submitted successfully");
    this.setState(prevState => ({
      ...prevState,
      showConsentModal: false
    }));
  };
  render() {
    const {
      form,
      errors,
      formValid,
      showErrorModal,
      extractedErrors,
      showConsentModal
    } = this.state;
    const { survivorName, survivorPhone, ffName, ffPhone } = form;
    const {
      survivorName: sNError,
      survivorPhone: sPError,
      ffName: ffNError,
      ffPhone: ffPError,
      categoryId: catError
    } = errors;
    return (
      <Wrapper>
        {!formValid && (
          <Modal
            show={showErrorModal}
            clicked={this.toggleErrorModal}
            toggle={this.toggleErrorModal}
            modalType="ok"
            modalTitle="Error"
          >
            {extractedErrors.map(err => (
              <p key={err} style={{ color: "#D62246" }}>
                {err}
              </p>
            ))}
          </Modal>
        )}
        {
          <Modal
            show={showConsentModal}
            clicked={this.submitConversation}
            toggle={this.toggleConsentModal}
            modalTitle="Confirmation"
          >
            <p>Are you sure you want to submit this conversation request?</p>
            <p>By Clicking Continue, you agree by the terms and condition</p>
          </Modal>
        }
        <Container>
          <FormHeader>
            <Img src={logo} alt="" />
            <H3>Start a Conversation</H3>
          </FormHeader>
          <Form autoComplete="off" onSubmit={this.submitHandler}>
            <Row>
              <InputGroup>
                <Label>Your Name</Label>
                <Input
                  type="text"
                  name="survivorName"
                  placeholder="Your Name"
                  onKeyDown={this.onKeydown}
                  onChange={this.inputChangeHandler}
                  value={survivorName}
                />
                <Bar invalid={sNError} />
              </InputGroup>
              <InputGroup>
                <Label>Your Phone Number</Label>
                <Input
                  type="tel"
                  name="survivorPhone"
                  placeholder="Your Phone Number"
                  onKeyDown={this.onKeydown}
                  onChange={this.inputChangeHandler}
                  value={survivorPhone}
                />
                <Bar invalid={sPError} />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup>
                <Label>Friend/Family Name</Label>
                <Input
                  type="text"
                  name="ffName"
                  placeholder="Friend/Family Name"
                  onKeyDown={this.onKeydown}
                  onChange={this.inputChangeHandler}
                  value={ffName}
                />
                <Bar invalid={ffNError} />
              </InputGroup>
              <InputGroup>
                <Label>Friend/Family Phone Number</Label>
                <Input
                  type="tel"
                  name="ffPhone"
                  placeholder="Friend/Family Phone Number"
                  onKeyDown={this.onKeydown}
                  onChange={this.inputChangeHandler}
                  value={ffPhone}
                />
                <Bar invalid={ffPError} />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup>
                <Select onChange={this.inputChangeHandler} name="categoryId">
                  <option value="">Select Category</option>
                  <option value="1">Harassment</option>
                  <option value="2">Rape</option>
                </Select>
                <Bar invalid={catError} />
              </InputGroup>
            </Row>
            <Row>
              <Submit type="submit">Continue</Submit>
            </Row>
          </Form>
        </Container>
      </Wrapper>
    );
  }
}

export default NewConversation;

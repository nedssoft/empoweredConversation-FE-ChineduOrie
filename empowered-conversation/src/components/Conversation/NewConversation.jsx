import React from "react";
import axios from "axios";
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
  Select
} from "./Styles";
import { Submit } from "../styled/reusables";
import Spinner from "../UI/Spinner/Spinner";
import logo from "../../img/EmpoweredConversation-Logo-Md.png";
import Modal from "../UI/Modal/Modal";

const initialForm = {
  survivorName: "",
  survivorPhone: "",
  ffName: "",
  ffPhone: "",
  categoryId: ""
};
const initialError = {
  survivorName: "",
  survivorPhone: "",
  ffName: "",
  ffPhone: "",
  categoryId: ""
};
const BASE_URL = "https://emp-convo.herokuapp.com";
class NewConversation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: initialForm,
      errors: initialError,
      formValid: true,
      extractedErrors: [],
      showErrorModal: false,
      showConsentModal: false,
      categories: [],
      showSuccessModal: false,
      successMessage: "",
      isLoading: false
    };
  }
  componentDidMount() {
    axios
      .get(`${BASE_URL}/categories`)
      .then(res => {
        this.setState(prevState => ({
          ...prevState,
          categories: res.data
        }));
      })
      .catch(() => {
        return;
      });
  }
  inputChangeHandler = e => {
    const { name, value } = e.target;
    this.validateInput(name, value);
    this.setState(prevState => ({
      ...prevState,
      form: {
        ...prevState.form,
        [name]: value
      }
    }));
  };
  validateInput = (name, value) => {
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
          value === "" ? "Select the conversation category" : "";
        break;
      default:
        break;
    }
    this.setState(prevState => ({
      ...prevState,
      errors
    }));
  };
  checkFormValidity = () => {
    const { form } = this.state;
    let valid = true;
    Object.values(form).forEach(val => !val.length && (valid = false));
    return valid;
  };
  onKeydown = ({ target }) => {
    const label = target.parentNode.querySelector("label");
    label.style.display = "block";
  };

  submitHandler = e => {
    e.preventDefault();
    const { errors } = this.state;
    if (!this.checkFormValidity()) {
      const extractedErrors = errors.length
        ? Object.values(errors).filter(err => err !== "")
        : ["Kindly check that all fields are filled"];
      this.setState(prevState => ({
        ...prevState,
        formValid: false,
        extractedErrors: extractedErrors,
        showErrorModal: true
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        showConsentModal: true,
        errors: {
          ...initialError
        }
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
    this.setState(prevState => ({
      ...prevState,
      showConsentModal: false,
      isLoading: true
    }));
    const { form } = this.state;
    const { survivorName, survivorPhone, ffName, ffPhone, categoryId } = form;
    const newConversation = {
      survivorname: survivorName,
      survivornumber: survivorPhone,
      ffname: ffName,
      ffnumber: ffPhone,
      category: {
        categoryid: categoryId
      }
    };
    axios
      .post(`${BASE_URL}/conversations`, newConversation)
      .then(res => {
        this.setState(prevState => ({
          ...prevState,
          successMessage: res.data.ffname,
          showSuccessModal: true,
          isLoading: false
        }));
      })
      .catch(err => {
        this.setState(prevState => ({
          ...prevState,
          extractedErrors: [err.message],
          showErrorModal: true,
          isLoading: false
        }));
      });
  };
  toggleSuccessModal = () => {
    this.setState(prevState => ({
      ...prevState,
      successMessage: "",
      showSuccessModal: false,
      form: { ...initialForm }
    }));
  };
  render() {
    const {
      form,
      errors,
      formValid,
      showErrorModal,
      extractedErrors,
      showConsentModal,
      categories,
      showSuccessModal,
      successMessage,
      isLoading
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
        {isLoading && <Spinner />}
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
        {
          <Modal
            show={showSuccessModal}
            toggle={this.toggleSuccessModal}
            clicked={this.toggleSuccessModal}
            modalTitle="Success"
            modalType="ok"
          >
            {successMessage && (
              <p>
                {`${successMessage}
                  has been notified, you'll be contacted when
                he/she is ready for the conversation`}
              </p>
            )}
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
              <InputGroup width="35%">
                <Select onChange={this.inputChangeHandler} name="categoryId">
                  <option value="">Select Category</option>
                  {categories &&
                    categories.map(cat => (
                      <option value={cat.categoryid} key={cat.categoryid}>
                        {cat.categoryname}
                      </option>
                    ))}
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

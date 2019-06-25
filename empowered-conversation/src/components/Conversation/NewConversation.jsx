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
      }
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
      alert(Object.values(errors).join('\n'));
    } else {
      alert("all good!!!");
    }
  };
  render() {
    const { form } = this.state;
    const { survivorName, survivorPhone, ffName, ffPhone } = form;

    return (
      <Wrapper>
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
                <Bar />
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
                <Bar />
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
                <Bar />
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
                <Bar />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup>
                <Select onChange={this.inputChangeHandler} name="categoryId">
                  <option value="">Select Category</option>
                  <option value="1">Harassment</option>
                  <option value="2">Rape</option>
                </Select>
                <Bar />
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

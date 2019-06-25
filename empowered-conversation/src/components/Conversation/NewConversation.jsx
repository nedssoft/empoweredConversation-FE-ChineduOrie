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
    this.state = {};
  }

  onKeydown = ({ target }) => {
    const label = target.parentNode.querySelector('label')
    label.style.display = 'block'
  }
  submitHandler = (e) => {
    e.preventDefault()
  }
  render() {
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
                />
                <Bar />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup>
                <Select>
                  <option>Select Category</option>
                  <option>Harassment</option>
                  <option>Rape</option>
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

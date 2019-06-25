import React from "react";
import queryString from "query-string";
import propTypes from "prop-types";
import axios from "axios";
import { Wrapper, Title, ActionBtn } from "./Styles";
import Resource from "./Resource";
import Spinner from "../UI/Spinner/Spinner";

const BASE_URL = "https://emp-convo.herokuapp.com";
class Resources extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resources: [],
      conversationId: "",
      isLoading: true
    };
  }

  componentDidMount() {
    const { location } = this.props;
    try {
      const { caid: categoryId, cid: conversationId } = queryString.parse(
        location.search
      );
      axios
        .get(`${BASE_URL}/categories/${categoryId}/resources`)
        .then(res => {
          this.setState(prevState => ({
            ...prevState,
            conversationId: conversationId,
            resources: res.data,
            isLoading: false
          }));
        })
        .catch(() => {
          return; //
        });
    } catch (err) {
      return;
    }
  }
  render() {
    const { resources, isLoading } = this.state;
    return (
      <Wrapper>
        {isLoading && <Spinner />}
        <Title>
          We have some resources to help you better prepare ahead of the
          conversation
        </Title>
        {resources &&
          resources.map(res => (
            <Resource key={res.resourceid} resource={res} />
          ))}
        <ActionBtn>I am Ready For the conversation</ActionBtn>
      </Wrapper>
    );
  }
}

Resources.propTypes = {
  location: propTypes.objectOf(propTypes.any).isRequired
};
export default Resources;

import React from "react";
import queryString from "query-string";
import propTypes from "prop-types";
import axios from "axios";
import { Wrapper, Title, ActionBtn } from "./Styles";
import Resource from "./Resource";
import Spinner from "../UI/Spinner/Spinner";
import Modal from "../UI/Modal/Modal";
import { SpinnerIcon } from "../styled/reusables";

const BASE_URL = "https://emp-convo.herokuapp.com";
class Resources extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resources: [],
      conversationId: "",
      isLoading: true,
      modal: {
        title: "",
        show: false,
        message: null
      }
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
          location.reload();
        });
    } catch (err) {
      return;
    }
  }
  notifySurvivor = () => {
    const { conversationId } = this.state;
    this.setState(prevState => ({
      ...prevState,
      isLoading: true
    }));
    axios
      .delete(`${BASE_URL}/conversations/finished/${conversationId}`)
      .then(() => {
        this.setState(prevState => ({
          ...prevState,
          isLoading: false,
          modal: {
            show: true,
            message: "The requester has been notified",
            title: "Success"
          }
        }));
      })
      .catch(() => {
        this.setState(prevState => ({
          ...prevState,
          isLoading: false,
          modal: {
            show: true,
            message: "The requester has been notified",
            title: "Success"
          }
        }));
      });
  };

  toggleModal = () => {
    this.setState(prevState => ({
      ...prevState,
      modal: {
        show: false,
        message: "",
        title: ""
      }
    }));
  };
  render() {
    const { resources, isLoading, modal } = this.state;
    return (
      <Wrapper>
        {isLoading && <Spinner />}
        {modal.show && (
          <Modal
            show={modal.show}
            modalTitle={modal.title}
            modalType="ok"
            toggle={this.toggleModal}
            clicked={this.toggleModal}
          >
            <p>{modal.message}</p>
          </Modal>
        )}
        <Title>
          We have some resources to help you better prepare ahead of the
          conversation
        </Title>
        {resources &&
          resources.map(res => (
            <Resource key={res.resourceid} resource={res} />
          ))}
        <ActionBtn onClick={this.notifySurvivor}>
          {isLoading ? <SpinnerIcon /> : "I am Ready for the Conversation"}
        </ActionBtn>
      </Wrapper>
    );
  }
}

Resources.propTypes = {
  location: propTypes.objectOf(propTypes.any).isRequired
};
export default Resources;

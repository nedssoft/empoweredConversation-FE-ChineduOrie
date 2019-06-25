import React from "react";
import { Wrapper, Title } from "./Styles";
import Resource from './Resource'
import {Submit} from '../styled/reusables'

class Resources extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resources: []
    };
  }

  componentDidMount() {}
  render() {
    const { resources } = this.state;
    return (
      <Wrapper>
        <Title>
          We have some resources to help you better prepare ahead of the
          conversation
        </Title>
        {resources && resources.map(res => (
          <Resource key={res.id} resource={res} />
        ))}
        <Submit>I am Ready</Submit>
      </Wrapper>
    );
  }
}

export default Resources;

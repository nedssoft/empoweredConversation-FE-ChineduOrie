import { shallow } from "enzyme";
import React from "react";
import NewConversation from "../NewConversation";

describe("Conversation Component tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NewConversation />);
  });
  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

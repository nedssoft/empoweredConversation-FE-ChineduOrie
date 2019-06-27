import { shallow } from "enzyme";
import React from 'react'
import NewConversation from "../NewConversation";

describe("Conversation Component tests", () => {
  it("should render without crashing", () => {
    shallow(<NewConversation />);
  });
});

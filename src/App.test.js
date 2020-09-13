import React from "react";
import { render } from "@testing-library/react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

configure({ adapter: new Adapter() });

describe("", () => {
  it("renders", () => {
    const wrapper = shallow(<App />);
  });
});

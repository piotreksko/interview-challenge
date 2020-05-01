import React from "react";
import Header from "./Header";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const getWrapper = (props) => shallow(<Header {...props} />);

const selectedItems = [
  {
    id: 1001,
    name: "Kale Caesar Pasta",
    dietaries: ["v"],
  },
  {
    id: 1003,
    name: "Dill & Swiss Chard Potato Cakes",
    dietaries: ["gf", "df"],
  },
];

describe("Header", () => {
  it("should display selected items amount", () => {
    const props = { selectedItems };
    const wrapper = getWrapper(props);
    expect(wrapper.text().includes(selectedItems.length)).toBe(true);
  });
});

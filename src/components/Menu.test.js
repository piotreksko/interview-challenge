import React from "react";
import Menu from "./Menu";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SingleListItem from "./SingleListItem";

Enzyme.configure({ adapter: new Adapter() });

const getWrapper = (props) => shallow(<Menu {...props} />);

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

describe("Menu", () => {
  it("should display selectedItems from props", () => {
    const props = { selectedItems, removeSelectedItem: jest.fn() };
    const wrapper = getWrapper(props);
    const renderedItems = wrapper.find(SingleListItem);
    expect(renderedItems.length).toEqual(selectedItems.length);
  });
});

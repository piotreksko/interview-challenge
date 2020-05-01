import React from "react";
import Sidebar from "./Sidebar";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SingleListItem from "./SingleListItem";

Enzyme.configure({ adapter: new Adapter() });

const getWrapper = (props) => shallow(<Sidebar {...props} />);

const items = [
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

describe("Sidebar", () => {
  it("should display items from props", () => {
    const props = { items, addSelectedItem: jest.fn() };
    const wrapper = getWrapper(props);
    const renderedItems = wrapper.find(SingleListItem);
    expect(renderedItems.length).toEqual(items.length);
  });
});

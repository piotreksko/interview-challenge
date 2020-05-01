import React from "react";
import SingleListItem from "./SingleListItem";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const getWrapper = (props) => shallow(<SingleListItem {...props} />);

const item = {
  id: 1001,
  name: "Kale Caesar Pasta",
  dietaries: ["v"],
};

describe("SingleListItem", () => {
  it("should display item information and not render remove button", () => {
    const wrapper = getWrapper({ item });
    expect(wrapper.text().includes(item.name)).toBe(true);
    expect(wrapper.text().includes(item.dietaries[0])).toBe(true);
    expect(wrapper.text().includes('x')).toBe(false);
  });

  it("should call addSelectedItem onClick", () => {
    const props = { item, addSelectedItem: jest.fn() };
    const wrapper = getWrapper(props);
    wrapper.find("li").simulate("click");
    expect(props.addSelectedItem).toHaveBeenCalledWith(item);
  });
  
  it("should call render remove button and call removeSelectedItem onClick", () => {
    const props = { item, removeSelectedItem: jest.fn() };
    const wrapper = getWrapper(props);
    wrapper.find("button").simulate("click");
    expect(wrapper.text().includes('x')).toBe(true);
    expect(props.removeSelectedItem).toHaveBeenCalledWith(item.id);
  });
});

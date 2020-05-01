import React from "react";
import Main from "./Main";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const getWrapper = () => shallow(<Main />);

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
  {
    id: 1004,
    name: "Hake & Smoky Chickpeas",
    dietaries: ["df", "gf", "rsf"],
  },
];

describe("Main", () => {
  it("should addSelectedItem if its not on the list", () => {
    const wrapper = getWrapper();
    const testItem = items[0];

    expect(wrapper.instance().state.selectedItems).toEqual([]);
    wrapper.instance().addSelectedItem(testItem);
    expect(wrapper.instance().state.selectedItems).toEqual([testItem]);
  });

  it("should notAddSelectedItem if it is on the list", () => {
    const wrapper = getWrapper();
    const testItem = items[0];

    wrapper.setState({ selectedItems: items });
    expect(wrapper.instance().state.selectedItems.length).toEqual(items.length);
    wrapper.instance().addSelectedItem(testItem);
    expect(wrapper.instance().state.selectedItems.length).toEqual(items.length);
  });

  it("should removeSelectedItem from the list", () => {
    const wrapper = getWrapper();
    const testItem = items[0];

    wrapper.setState({ selectedItems: items });
    expect(wrapper.instance().state.selectedItems.length).toEqual(items.length);
    wrapper.instance().removeSelectedItem(testItem.id);
    expect(wrapper.instance().state.selectedItems.length).toEqual(
      items.length - 1
    );
  });
});

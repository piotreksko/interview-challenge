import React from "react";
import DietariesCount from "./DietariesCount";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const getWrapper = (props) => shallow(<DietariesCount {...props} />);

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
  {
    id: 1004,
    name: "Hake & Smoky Chickpeas",
    dietaries: ["df", "gf", "rsf"],
  },
];

describe("DietariesCount", () => {
  it("should display total dietaries count", () => {
    const props = { selectedItems };
    const wrapper = getWrapper(props);
    expect(wrapper.text().includes("1x v")).toBe(true);
    expect(wrapper.text().includes("1x rsf")).toBe(true);
    expect(wrapper.text().includes("2x gf")).toBe(true);
    expect(wrapper.text().includes("2x df")).toBe(true);
  });
});

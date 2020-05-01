import React, { Component } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Menu from "./Menu";
import items from "../items";

class Main extends Component {
  state = {
    selectedItems: [],
  };

  addSelectedItem = (item) => {
    const { selectedItems } = this.state;
    const alreadyAdded = selectedItems.some(
      (selItem) => selItem.id === item.id
    );
    if (!alreadyAdded) {
      this.setState({ selectedItems: [...selectedItems, item] });
    }
  };

  removeSelectedItem = (id) => {
    const { selectedItems } = this.state;
    const newItems = selectedItems.filter((item) => item.id !== id);
    this.setState({ selectedItems: newItems });
  };

  render() {
    return (
      <div className="wrapper">
        <Header selectedItems={this.state.selectedItems}/>
        <div className="container menu-builder">
          <div className="row">
            <Sidebar items={items} addSelectedItem={this.addSelectedItem} />
            <Menu
              selectedItems={this.state.selectedItems}
              removeSelectedItem={this.removeSelectedItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

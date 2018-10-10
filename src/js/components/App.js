import React, { Component } from "react";
import CardsList from "./CardsList";
import ColumnsList from "./ColumnsList";

class App extends Component {
  render() {
    return (
      <div>
        <div>Hello World!</div>
        <CardsList />
        <ColumnsList />
      </div>
    )
  }
}

export default App;
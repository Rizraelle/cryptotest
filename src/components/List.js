import React, { Component } from "react";
import Item from "./Item";
import { StyledList } from "../styled";

class List extends Component {
  render() {
    return (
      <StyledList>
        <Item />
        <Item />
        <Item />
      </StyledList>
    );
  }
}

export default List;

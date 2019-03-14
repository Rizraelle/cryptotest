import React, { Component } from "react";
import { WideContainer, GraphicsCurrencies, GraphicsItem } from "./styled";

class Graphics extends Component {
  render() {
    return (
      <WideContainer>
        <GraphicsCurrencies>
          <GraphicsItem />
        </GraphicsCurrencies>
      </WideContainer>
    );
  }
}

export default Graphics;

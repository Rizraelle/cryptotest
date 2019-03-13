import React, { Component } from "react";
import {
  Wrapper,
  StyledItem,
  ItemPart,
  GeneralLine,
  FadedLine,
  IconBTC
} from "../styled";

class Item extends Component {
  render() {
    return (
      <StyledItem>
        <ItemPart>
          <IconBTC>
            <span className="icon icon-btc" />
          </IconBTC>
          <Wrapper>
            <GeneralLine>
              <div>BTC</div>
              <div>0.241234523</div>
            </GeneralLine>
            <FadedLine>
              <div>Bitcoin</div>
              <div>$1,238.62</div>
            </FadedLine>
          </Wrapper>
        </ItemPart>
        <ItemPart>
          <Wrapper>
            <GeneralLine>
              <div>BTC</div>
              <div>0.241234523</div>
            </GeneralLine>
            <FadedLine>
              <div>Bitcoin</div>
              <div>$1,238.62</div>
            </FadedLine>
          </Wrapper>
        </ItemPart>
      </StyledItem>
    );
  }
}

export default Item;

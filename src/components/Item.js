import React, { Component } from "react";
import {
  Wrapper,
  StyledItem,
  ItemPart,
  GeneralLine,
  FadedLine,
  IconBTC,
  PositiveText
} from "../styled";

class Item extends Component {
  render() {
    const { shortName, fullName, quantity, price } = this.props;
    return (
      <StyledItem>
        <ItemPart>
          <IconBTC>
            <span className="icon icon-btc" />
          </IconBTC>
          <Wrapper>
            <GeneralLine>
              <div>{shortName}</div>
              <div>{quantity}</div>
            </GeneralLine>
            <FadedLine>
              <div>{fullName}</div>
              <div>${price}</div>
            </FadedLine>
          </Wrapper>
        </ItemPart>
        <ItemPart>
          <Wrapper>
            <GeneralLine>
              <div>BTC</div>
              <PositiveText>+ 2.456</PositiveText>
            </GeneralLine>
            <FadedLine>
              <div>Price</div>
              <div>Profit / Loss</div>
            </FadedLine>
          </Wrapper>
        </ItemPart>
      </StyledItem>
    );
  }
}

export default Item;

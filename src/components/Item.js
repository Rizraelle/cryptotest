import React, { Component } from "react";
import {
  Wrapper,
  StyledItem,
  ItemPart,
  GeneralLine,
  FadedLine,
  Icon,
  PositiveText
} from "../styled";

class Item extends Component {
  render() {
    const { shortName, fullName, quantity, price } = this.props;
    const iconClassName = `icon icon-${shortName.toLowerCase()}`;
    return (
      <StyledItem>
        <ItemPart>
          <Icon>
            <span className={iconClassName} />
          </Icon>
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

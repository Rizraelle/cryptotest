import React, { Component } from "react";
import {
  StyledGraphicsItem,
  ItemPart,
  Icon,
  Wrapper,
  GeneralLine,
  FadedLine,
  PositiveText
} from "../styled";

class GraphicsItem extends Component {
  render() {
    const { shortName, fullName, quantity, pathname } = this.props;
    const iconClassName = `icon icon-${shortName.toLowerCase()}`;
    return (
      <StyledGraphicsItem pathname={pathname} shortName={shortName}>
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
              <PositiveText>+37.5</PositiveText>
            </FadedLine>
          </Wrapper>
        </ItemPart>
      </StyledGraphicsItem>
    );
  }
}

export default GraphicsItem;

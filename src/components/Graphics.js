import React, { Component } from "react";
import { connect } from "react-redux";
import {
  WideContainer,
  GraphicsCurrencies,
  GraphicsItem,
  GeneralLine,
  Icon,
  ItemPart,
  Wrapper,
  IconBTC,
  FadedLine,
  PositiveText,
  StyledLink
} from "../styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Graphics extends Component {
  state = {
    graphData: []
  };
  componentDidMount() {
    this.setGraphics();
  }

  setGraphics = async () => {
    const url =
      "https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=100&aggregate=1";
    const response = await fetch(url).then(response => response.json());
    this.setState({
      graphData: response.Data
    });
  };

  render() {
    const { shortName, fullName, quantity } = this.props;
    return (
      <WideContainer>
        <GeneralLine>
          <StyledLink to="/">
            <Icon>
              <FontAwesomeIcon icon="arrow-left" />
            </Icon>
          </StyledLink>
        </GeneralLine>
        <GraphicsCurrencies>
          <GraphicsItem>
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
                  <PositiveText>+37.5</PositiveText>
                </FadedLine>
              </Wrapper>
            </ItemPart>
          </GraphicsItem>
        </GraphicsCurrencies>
      </WideContainer>
    );
  }
}

export default connect((state, props) => {
  const {
    location: { pathname }
  } = props;
  const currencyName = pathname.slice(1);
  return { ...state.currencies[currencyName] };
})(Graphics);

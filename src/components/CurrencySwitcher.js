import React, { Component } from "react";
import { connect } from "react-redux";
import { GraphicsCurrencies, StyledLink } from "../styled";
import GraphicsItem from "./GraphicsItem";

class CurrencySwitcher extends Component {
  render() {
    const { currencies, pathname } = this.props;
    return (
      <GraphicsCurrencies>
        {Object.values(currencies).map(currency => (
          <StyledLink to={`/${currency.shortName}`} key={currency.shortName}>
            <GraphicsItem {...currency} pathname={pathname} />
          </StyledLink>
        ))}
      </GraphicsCurrencies>
    );
  }
}

export default connect(
  state => ({ currencies: state.currencies }),
  null
)(CurrencySwitcher);

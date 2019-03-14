import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "./Item";
import { setPrices } from "../actions";
import { StyledList, StyledLink } from "../styled";

class List extends Component {
  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const { setting } = this.props;
    const url =
      "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD";
    const response = await fetch(url).then(response => response.json());
    setting(response);
  };

  render() {
    const { currencies } = this.props;
    return (
      <StyledList>
        {Object.values(currencies).map(currency => (
          <StyledLink to={`/${currency.shortName}`}>
            <Item {...currency} key={currency.shortName} />
          </StyledLink>
        ))}
      </StyledList>
    );
  }
}

export default connect(
  state => ({ currencies: state.currencies }),
  dispatch => ({
    setting: prices => {
      dispatch(setPrices(prices));
    }
  })
)(List);

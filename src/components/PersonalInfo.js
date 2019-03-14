import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Wrapper,
  Icon,
  GeneralLine,
  BalanceWrapper,
  TotalBalance,
  TotalBalanceCurrency,
  PositiveText
} from "../styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class PersonalInfo extends Component {
  render() {
    const { totalBalance } = this.props;
    return (
      <Wrapper>
        <GeneralLine>
          <Icon>
            <FontAwesomeIcon icon="search" />
          </Icon>
          <Icon>
            <FontAwesomeIcon icon="bell" />
          </Icon>
        </GeneralLine>
        <BalanceWrapper>
          Your total balance
          <TotalBalance>
            <TotalBalanceCurrency>$</TotalBalanceCurrency>
            {totalBalance}
          </TotalBalance>
        </BalanceWrapper>
        <BalanceWrapper>
          24h changes
          <PositiveText>
            + $37.55<span> </span>
            <FontAwesomeIcon icon="long-arrow-alt-up" />
          </PositiveText>
        </BalanceWrapper>
      </Wrapper>
    );
  }
}

export default connect(
  ({ currencies }) => {
    const totalBalance = Object.values(currencies).reduce(
      (accumulator, currentValue) => {
        const { price, quantity } = currentValue;
        return Math.floor(price * quantity + accumulator);
      },
      0
    );
    return { totalBalance };
  },
  null
)(PersonalInfo);

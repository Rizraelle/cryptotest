import React, { Component } from "react";
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
            1,632.95
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

export default PersonalInfo;

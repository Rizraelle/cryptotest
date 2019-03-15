import React, { Component } from "react";
import { Wrapper, SwitchButton } from "../styled";

class PeriodSwitcher extends Component {
  render() {
    const { aggregatePeriod, changePeriod, setGraphics } = this.props;
    return (
      <Wrapper>
        <SwitchButton
          period="1"
          selectedPeriod={aggregatePeriod}
          onClick={() => {
            changePeriod("1");
            setGraphics("1");
          }}
        >
          Day
        </SwitchButton>
        <SwitchButton
          period="7"
          selectedPeriod={aggregatePeriod}
          onClick={() => {
            changePeriod("7");
            setGraphics("7");
          }}
        >
          Week
        </SwitchButton>
        <SwitchButton
          period="30"
          selectedPeriod={aggregatePeriod}
          onClick={() => {
            changePeriod("30");
            setGraphics("30");
          }}
        >
          Month
        </SwitchButton>
      </Wrapper>
    );
  }
}

export default PeriodSwitcher;

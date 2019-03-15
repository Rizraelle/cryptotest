import React, { Component } from "react";
import { connect } from "react-redux";
import {
  WideContainer,
  GeneralLine,
  Icon,
  StyledLink,
  AreaChartScroll,
  ItemPart,
  Wrapper,
  FadedLine,
  PositiveText
} from "../styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import PeriodSwitcher from "./PeriodSwitcher";
import CurrencySwitcher from "./CurrencySwitcher";

import { Area, CartesianGrid, XAxis, YAxis } from "recharts";

class Graphics extends Component {
  state = {
    graphData: [],
    aggregatePeriod: "1"
  };

  componentDidMount() {
    this.setGraphics();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.shortName !== this.props.shortName) {
      this.setGraphics();
    }
  }

  changePeriod = period => {
    this.setState({
      aggregatePeriod: period
    });
  };

  setGraphics = async period => {
    const { shortName } = this.props;
    const aggregatePeriod = period || this.state.aggregatePeriod;
    const url = `https://min-api.cryptocompare.com/data/histoday?fsym=${shortName}&tsym=USD&limit=15&aggregate=${aggregatePeriod}`;
    const response = await fetch(url).then(response => response.json());
    const responseData = response.Data;
    const mappedData = responseData.map(element => ({
      ...element,
      time: moment(element.time).format("HH:MM")
    }));
    this.setState({
      graphData: mappedData
    });
  };

  render() {
    const { graphData, aggregatePeriod } = this.state;
    const { shortName, fullName, quantity } = this.props;
    const {
      location: { pathname }
    } = this.props;
    const iconClassName = `icon icon-${shortName.toLowerCase()}`;
    return (
      <WideContainer>
        <GeneralLine>
          <StyledLink to="/">
            <Icon>
              <FontAwesomeIcon icon="arrow-left" />
            </Icon>
          </StyledLink>
        </GeneralLine>
        <CurrencySwitcher pathname={pathname} />
        <Wrapper>
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
                <PositiveText>+ 2.456</PositiveText>
              </FadedLine>
            </Wrapper>
          </ItemPart>
        </Wrapper>
        <PeriodSwitcher
          aggregatePeriod={aggregatePeriod}
          changePeriod={this.changePeriod}
          setGraphics={this.setGraphics}
        />
        <AreaChartScroll width={500} height={500} data={graphData}>
          <Area type="linear" dataKey="high" stroke="#9A7DD9" fill="#38364C" />
          <CartesianGrid stroke="#4b4d59" />
          <XAxis dataKey="time" />
          <YAxis dataKey="high" />
        </AreaChartScroll>
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

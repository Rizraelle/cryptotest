import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { AreaChart } from "recharts";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: inherit;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  box-sizing: border-box;
  color: #fff;
  background: linear-gradient(to bottom, #434552, #242430);
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

export const WideContainer = styled(Container)`
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: -webkit-fill-available;
  padding: 10px;
`;

export const BalanceWrapper = styled(Wrapper)`
  color: #a9abb7;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledList = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

export const StyledItem = styled(StyledList)`
  padding: 5px 15px;
  box-sizing: border-box;
  background-color: #42424e;
  border-radius: 6px;
`;

export const StyledGraphicsItem = styled(StyledItem)`
  padding: 0 10px;
  border: 1px solid #4b4d59;
  background: none;
  max-width: 220px;
  min-width: 220px;
  margin: 10px;
  background: ${({ shortName, pathname }) =>
    pathname.includes(shortName) && "#4b4d59"};
`;

export const ItemPart = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  height: 50%;
  width: 100%;

  &:nth-child(2) {
    border-top: 2px solid #484854;
  }
`;

export const GeneralLine = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  font-size: 20px;
  width: 100%;
`;

export const FadedLine = styled(GeneralLine)`
  color: #a9abb7;
  font-size: 14px;
`;

export const Icon = styled.div`
  box-sizing: border-box;
  width: 40px;
  min-width: 40px;
  height: 40px;
  padding: 6px;
  font-size: 20px;
`;

export const IconBTC = styled(Icon)`
  background: linear-gradient(to bottom, #fcaa3a, #fa9500);
  border-radius: 50%;
  transform: rotate(20deg);
  margin-right: 10px;
`;

export const TotalBalance = styled.div`
  display: flex;
  font-size: 50px;
  color: #fff;
  line-height: 50px;
`;

export const TotalBalanceCurrency = styled.div`
  font-size: 24px;
  line-height: 40px;
`;

export const PositiveText = styled.div`
  color: #0ada82;
  font-weight: 500;
`;

export const NegativeText = styled.div`
  color: #ff7779;
`;

export const GraphicsCurrencies = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  overflow: scroll;
`;

export const SwitchButton = styled.div`
  font-size: 14px;
  line-height: 14px;
  height: 18px;
  width: 60px;
  padding: 2px 4px;
  margin: 2px;
  border-radius: 4px;
  background: ${({ selectedPeriod, period }) =>
    selectedPeriod === period && "#4b4d59"};
`;

export const AreaChartScroll = styled(AreaChart)`
  overflow: scroll;
  max-width: 100%;
`;

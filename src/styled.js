import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: inherit;
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
  width: unset;
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
  margin-bottom: 20px;
  box-sizing: border-box;
  background-color: #42424e;
  border-radius: 6px;
`;

export const GraphicsItem = styled(StyledItem)`
  border: 1px solid #42424e;
  background: none;

  &:active {
    background-color: #42424e;
  }
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
`;

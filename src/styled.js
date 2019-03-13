import styled from "styled-components/macro";

export const Container = styled.div`
  box-sizing: border-box;
  color: #fff;
  background-color: #3b3d49;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
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
  font-size: 16px;
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

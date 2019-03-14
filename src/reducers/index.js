import { SET_PRICES } from "../actions/action-types";

const randomQty = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const initialState = {
  currencies: {
    BTC: {
      shortName: "BTC",
      fullName: "Bitcoin",
      quantity: randomQty(0, 1),
      price: null
    },
    ETH: {
      shortName: "ETH",
      fullName: "Ethereum",
      quantity: randomQty(0, 5),
      price: null
    },
    XRP: {
      shortName: "XRP",
      fullName: "Ripple",
      quantity: randomQty(0, 200),
      price: null
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRICES:
      let withPrices = {};
      Object.keys(state.currencies).forEach(key => {
        withPrices[key] = {
          ...state.currencies[key],
          price: action.prices[key].USD
        };
      });
      return { ...state, currencies: withPrices };
    default:
      return state;
  }
};

export default reducer;

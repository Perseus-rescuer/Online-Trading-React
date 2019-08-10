import * as actionTypes from "../types";
import { updateObject } from "../utility";

const initialState = {
  data: [],
  chart: [],
  quote: {},
  symbols: [],
  news: [],
  profile: {},
  advStats: {},
  keyStats: {},
  balanceSheet: {},
  cashFlow: {},
  incomeStatement: {},
};

const getData = (state, action) => {
  return updateObject(state, {
    data: action.payload
  });
};

const getChart = (state, action) => {
  return updateObject(state, {
    chart: action.payload
  });
};

const getQuote = (state, action) => {
  return updateObject(state, {
    quote: action.payload
  });
};

const getSymbols = (state, action) => {
  return updateObject(state, {
    symbols: action.payload
  });
};

const getNews = (state, action) => {
  return updateObject(state, {
    news: action.payload
  });
};

const getProfile = (state, action) => {
  return updateObject(state, {
    profile: action.payload
  });
};

const getAdvStats = (state, action) => {
  return updateObject(state, {
    advStats: action.payload
  });
};

const getKeyStats = (state, action) => {
  return updateObject(state, {
    keyStats: action.payload
  });
};

const getBalanceSheet = (state, action) => {
  return updateObject(state, {
    balanceSheet: action.payload
  });
};

const getCashFlow = (state, action) => {
  return updateObject(state, {
    cashFlow: action.payload
  });
};

const getIncomeStatement = (state, action) => {
  return updateObject(state, {
    incomeStatement: action.payload
  });
};

const iexReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DATA:
      return getData(state, action);
    case actionTypes.GET_CHART:
      return getChart(state, action);
    case actionTypes.GET_SYMBOLS:
      return getSymbols(state, action);
    case actionTypes.GET_NEWS:
      return getNews(state, action);
    case actionTypes.GET_COMPANY_PROFILE:
      return getProfile(state, action);
    case actionTypes.GET_ADVANCED_STATS:
      return getAdvStats(state, action);
    case actionTypes.GET_KEY_STATS:
      return getKeyStats(state, action);
    case actionTypes.GET_BALANCE_SHEET:
      return getBalanceSheet(state, action);
    case actionTypes.GET_CASH_FLOW:
      return getCashFlow(state, action);
    case actionTypes.GET_INCOME_STATEMENT:
      return getIncomeStatement(state, action);
    case actionTypes.GET_QUOTE:
      return getQuote(state, action);
    default:
      return state;
  }
};

export default iexReducer;

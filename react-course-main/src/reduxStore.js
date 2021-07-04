import { createStore } from "redux";

//1. Create Action
export const incrementCounterAction = () => {
  return {
    type: "INCREMENT_COUNTER",
  };
};

export const decrementCounterAction = () => {
  return {
    type: "DECRMENT_COUNTER",
  };
};

export const resetCounterAction = () => {
  return {
    type: "RESET_COUNTER",
  };
};

// 2. Create Reducers

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return state + 1;
    case "DECRMENT_COUNTER":
      return state - 1;
    case "RESET_COUNTER":
      return 0;
    default:
      return state;
  }
};

// 3. Create store

const store = createStore(counterReducer);

export default store;

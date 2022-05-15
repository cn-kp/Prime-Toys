import { useReducer } from "react";
import { UPDATE_TOY, REMOVE_TOY } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case REMOVE_TOY:
      return {
        ...state,
        toys: [...state.toy, action.toy],
      };
    // case UPDATE_TOY:
    //   return {
    //     ...state,
    //     toys: [...state.toy, action.toy]
    //   };
    default:
      return state;
  }
};

export function useToyReducer(initialState) {
  return useReducer(reducer, initialState)
}
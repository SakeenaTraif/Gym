import * as types from "../actions/types";

const initialState = {
  _types: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TYPE:
      return {
        ...state,
        _types: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
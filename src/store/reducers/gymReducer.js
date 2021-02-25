import * as types from "../actions/types";

const initialState = {
  gyms: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_GYM:
      return {
        ...state,
        gyms: action.payload,
        loading: false,
      };
    case types.ADD_GYM:
      const { newGym } = action.payload;
      return {
        ...state,
        gyms: [...state.gyms, newGym],
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;

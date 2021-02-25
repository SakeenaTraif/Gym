import * as types from "../actions/types";

const initialState = {
  sessiones: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CLASS:
      return {
        ...state,
        sessiones: action.payload,
        loading: false,
      };
    case types.ADD_CLASS:
      const { newClass } = action.payload;
      return {
        ...state,
        sessiones: [...state.sessiones, newClass],
      };

    default:
      return state;
  }
};

export default reducer;

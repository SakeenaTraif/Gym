import * as types from "../actions/types";

const initialState = {
  classes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CLASS:
      return {
        ...state,
        classes: action.payload,
      };
      case types.ADD_CLASS:
        const { newClass } = action.payload;
        return {
          ...state,
          classes: [...state.classes, newClass],
        };

    default:
      return state;
  }
};

export default reducer;
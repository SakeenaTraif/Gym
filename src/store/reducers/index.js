import { combineReducers } from "redux";

import authReducer from "./authReducer";
import gymReducer from "./gymReducer";
import classReducer from "./classReducer";

const rootReducer = combineReducers({
  authReducer,
  gymReducer,

  classReducer,
});

export default rootReducer;

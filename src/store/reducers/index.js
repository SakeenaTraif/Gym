import { combineReducers } from "redux";

import authReducer from "./authReducer";
import  gymReducer from "./gymReducer";
import typeReducer from "./typeReducer";
import classReducer from "./classReducer";

const rootReducer = combineReducers({
  authReducer,
  gymReducer,
  typeReducer,
  classReducer,

});

export default rootReducer;
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { fetchGyms } from "./actions/gymActions";
import { fetchClass } from "./actions/classActions";
import { checkForToken } from "./actions/authActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(fetchGyms());
store.dispatch(fetchClass());
store.dispatch(checkForToken());

export default store;

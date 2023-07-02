import ApiReducer from "./redux/reducers/ApiReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import SortReducer from "./redux/reducers/SortReducer";
import { combineReducers } from "redux";
const rootReducer=combineReducers({
    api:ApiReducer,
    sort:SortReducer
})
const store=createStore(rootReducer,applyMiddleware(thunk));
export default store;
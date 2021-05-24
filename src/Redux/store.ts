import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import medalsReducer from "./Reducer";
import homeReducer from "./HomeReducer";


const rootReducer = combineReducers({medals:medalsReducer,home:homeReducer});

export const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk)) )
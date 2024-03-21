import { applyMiddleware, createStore } from "redux";
import rootReducer from "./root-reducer";
import {thunk} from 'redux-thunk'
import logger from "redux-logger"



const middlewares = [thunk,logger]


//@ts-ignore
const store = createStore(rootReducer,applyMiddleware(...middlewares))

export default store
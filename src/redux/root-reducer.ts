import { combineReducers } from "redux";
import dataReducer from "./data/data.reducer";

const rootReducer = combineReducers({
    chartData:dataReducer
})

export default rootReducer
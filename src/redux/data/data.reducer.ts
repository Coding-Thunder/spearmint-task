import Types from "./data.types";

const INITIAL__STATE = {
    xAxisData: [],
    yAxisData: [],
    loading: false
}

interface Action {
    type: string
    payload: any
}

const dataReducer = (state = INITIAL__STATE, action: Action) => {
    switch (action.type) {
        case Types.SET_X_DATA:
            return { ...state, xAxisData: action.payload }
        case Types.SET_Y_DATA:
            return { ...state, yAxisData: action.payload }
        case Types.SET_LOADING:
            return { ...state, loading: !state.loading }

        default:
            return state;
    }
}





export default dataReducer
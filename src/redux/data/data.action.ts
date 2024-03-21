import axios from "axios";
import Types from "./data.types";

export const xDataAction = (payload:any) => ({
    type:Types.SET_X_DATA,
    payload 
})

export const yDataAction = (payload:any) => ({
    type:Types.SET_Y_DATA,
    payload 
})

export const setLoadinTrue = () => ({
    type:Types.SET_LOADING
})


export const fetchData = () => {
    return (dispatch: any) => {
        dispatch(setLoadinTrue())
        axios.get(process.env.REACT_APP_Y_AXIS as string)
            .then(({ data }) => {
                if (Array.isArray(data)) {
                    if (data.length > 50) {
                        dispatch(xDataAction(data.slice(0,51)))
                    } else {
                        dispatch(data)
                    }
                }
            })
            .catch((error: any) => {
                // relative error handeling goes here
                console.log(error.message)
            })

        axios.get(process.env.REACT_APP_X_AXIS as string)
            .then(({ data }) => {
                if (Array.isArray(data)) {
                    if (data.length > 50) {
                        dispatch(yDataAction(data.slice(0,51)))
                    } else {
                        dispatch(data)
                    }
                }
            })
            .catch((error: Record<string, any>) => {
                // relative error handeling goes here
                console.log(error.message)
            })
            dispatch(setLoadinTrue())
    }
}
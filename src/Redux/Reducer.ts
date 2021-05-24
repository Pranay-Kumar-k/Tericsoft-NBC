import { MedalsTableParams } from "../Components/Interfaces/Interfaces";
import { GET_MEDALS_DATA } from "./actions"

const initialState:MedalsTableParams = {
    medalsTableDataList:[]
}

const medalsReducer = (state = initialState, action:any) : MedalsTableParams => {
    switch(action.type) {
        case GET_MEDALS_DATA:
            console.log(action)
            return {
                medalsTableDataList:action.medalsData
            };

        default:
            return state;
    }
}

export default medalsReducer
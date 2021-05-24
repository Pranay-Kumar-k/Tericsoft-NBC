import { HomeDataParams } from "../Components/Interfaces/Interfaces";
import { GET_HOME_DATA } from "./actions"

const initialState:HomeDataParams = {
    HomeDataList:[],
    bannerData:[],
    carouselsData:[]
}

const homeReducer = (state = initialState, action:any) : HomeDataParams => {
    switch(action.type) {
        case GET_HOME_DATA:
            console.log(action)
            return {
                HomeDataList:action.homeData,
                bannerData:action.homeData.banner,
                carouselsData:action.homeData.carousels
            };

        default:
            return state;
    }
}

export default homeReducer
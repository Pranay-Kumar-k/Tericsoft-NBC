import axios from "axios";

export const GET_MEDALS_DATA = "GET_MEDALS_DATA";
export const GET_HOME_DATA = "GET_HOME_DATA";

export const getMedalsData = (medalsData:[]) => {
    return {
        type:GET_MEDALS_DATA,
        medalsData:medalsData
    }
}

export const getData = (dispatch:any) => {
    axios.get("https://tentpole-api.dev.nbcuniversaltech.com/api/olympic/standings/v1")
    .then((res) => {
        console.log(res.data,"MedalsData")
        dispatch(getMedalsData(res.data.data))
    })
    .catch((e) => {console.log(e)})
}

export const getHomeData = (homeData:[]) => {
    return {
        type:GET_HOME_DATA,
        homeData:homeData
    }
}

export const getHomeDataList = (dispatch:any) => {
    axios.get("https://tentpole-api.dev.nbcuniversaltech.com/api/olympic/home")
    .then((res) => {
        console.log(res.data,"home")
        dispatch(getHomeData(res.data))
    })
    .catch((e) => {console.log(e)})
}

export interface StateParams {
    medals:MedalsTableParams
}

export interface MedalsTableParams {
    medalsTableDataList?:[]
}

export interface HomeDataParams {
    HomeDataList?:any,
    bannerData?:any,
    carouselsData?:any
}

export interface HomeDataStateParams {
    home:HomeDataParams
}

export interface DataList {
    bronzeMedals:number,
    countryGeoID:number,
    countryName:string,
    goldMedals:number,
    silverMedals:number,
    hash:string,
}

export interface BannerParams {
    adURL:string,
    description:string,
    duration:number,
    externalAdvertiserID:string,
    imageURL:string,
    resource:string,
    rovID:string,
    tags:[],
    title:string,
    uuid:string,
    videoMP4URL:string,
    videoURL:string
}

export interface CarouselDataParams {
    carouselItems:[],
    highlighter:string,
    title:string,
    size:string
}

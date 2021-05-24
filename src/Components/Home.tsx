import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHomeDataList } from '../Redux/actions';
import { Banner } from './Banner';
import { CarouselComponent } from './CarouselComponent';
import { HomeDataStateParams } from './Interfaces/Interfaces';

const Home = () =>  {
    // const homeDataList = useSelector((state:HomeDataStateParams) => state.home.HomeDataList);
    const bannerData = useSelector((state:HomeDataStateParams) => state.home.bannerData);
    const carouselsData = useSelector((state:HomeDataStateParams) => state.home.carouselsData);
    console.log(carouselsData)

    const dispatch = useDispatch();
    useEffect(() => {
        getHomeDataList(dispatch)
    },[dispatch])
    return (
        <div className="Home">
            <Banner {...bannerData}/>
            {carouselsData && carouselsData.map((item:any,index:number) => {
                return (
                    (index > 0) && (<CarouselComponent key={index} {...item}/>)
                )
            })}
        </div>
    )
}

export default Home
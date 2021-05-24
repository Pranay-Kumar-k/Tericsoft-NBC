import React, { useEffect } from 'react';
import { getData } from '../Redux/actions';
import {useSelector, useDispatch} from "react-redux";
import "./MedalsTable.scss";
import gold from "../assets/ic-star-gold.svg";
import silver from "../assets/ic-star-silver.svg";
import bronze from "../assets/ic-star-bronze.svg";
import { MedalsTableDataItem } from './MedalsTableDataItem';
import { StateParams } from './Interfaces/Interfaces';


const MedalsTable = () => {
    const medalsDataList = useSelector((state:StateParams) => state.medals.medalsTableDataList);
    console.log(medalsDataList)
    const dispatch = useDispatch()
    
    useEffect(() =>{
        getData(dispatch)
    },[dispatch])
    return (
        <>
        {medalsDataList && (<div className="MedalsTable">
            <table>
                <thead>
                    <tr>
                        <th colSpan={3}></th>
                        <th>
                            <img src={gold} alt="gold" />
                        </th>
                        <th>
                            <img src={silver} alt="silver" />
                        </th>
                        <th>
                            <img src={bronze} alt="bronze" />
                        </th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {medalsDataList && medalsDataList.map((item,index) => {
                        return(
                            <MedalsTableDataItem 
                                key={"row"+index}
                                {...item}
                            />
                        )
                    })}
                </tbody>
            </table>
        </div>
        )}
         </>
       )
}

export default MedalsTable
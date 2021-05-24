import React, { useState } from 'react'
import { DataList } from './Interfaces/Interfaces';
import "./MedalsTableDataItem.scss";

export const MedalsTableDataItem = (props:DataList) => {
    const {bronzeMedals,countryGeoID,countryName,goldMedals,silverMedals} = props
    const [selected,setSelected] = useState(false);
    return (
        <tr className={"table-row " + (selected ? "selected" : "")} onMouseOver={(e) => setSelected(true)} onMouseOut={(e) => setSelected(false)}>
            <td className="spacer">&nbsp;</td>
            <td>
                <img src={`http://images.sports.gracenote.com/images/lib/basic/geo/country/flag/SVG/${countryGeoID}.svg`} width="50px" alt={countryName}/>
            </td>
            <td>{countryName || "-"}</td>
            <td>{goldMedals || "0"}</td>
            <td>{silverMedals || "0"}</td>
            <td>{bronzeMedals || "0"}</td>
            <td className="spacer">&nbsp;</td>
        </tr>
    )
}

import React from "react";
import numeral from "numeral";

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";

export const sortData = (data) =>{
    const sortedData = [...data]

    sortedData.sort((a, b)=>{
        if(a.cases > b.cases){
            return -1;//false
        }else{
            return 1;//true
        }
    })
    return sortedData
}
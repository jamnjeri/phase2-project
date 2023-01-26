import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from "./globalsummary.css"
import Tableitems from './Tableitems'
import tablestyling from "./tableitems.css"

function Globalsummary() {

    const [data, setData] = useState({})

    useEffect(() => {
        fetchData()
    }, [])

    
    const fetchData = () => {
        axios.get (
            "https://api.covid19api.com/summary"
        ).then ((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    // console.log(data.Countries)

  return (
    <div>
        <h1 className='section-header'>GLOBAL SUMMARY TABLE :</h1>
        <table className='s-table'>
            <thead>
                <tr>
                <th>Country :</th>
                <th> CountryCode : </th>
                <th>Date :</th>
                <th>TotalCases :</th>
                <th>TotalDeaths :</th>
                </tr>
            </thead>
            <tbody>
                {
                    (data.Countries)?.map((item, index) => (
                        // console.log(item)
                        <Tableitems key={index}
                            id ={item.ID}
                            date ={item.Date}
                            country = {item.Country}
                            countryCode={item.CountryCode}
                            totalCases={item.TotalConfirmed}
                            totalDeaths={item.TotalDeaths}
                        />
                    ))
                }
            </tbody>
        </table>

    </div>
  )
}

export default Globalsummary
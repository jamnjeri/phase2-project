import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from "./globalsummary.css"
import Tableitems from './Tableitems'
import tablestyling from "./tableitems.css"

function Globalsummary() {

    const [data, setData] = useState({})
    const [dataCopy, setDataCopy] = useState({})

    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchData()
    }, [])

    
    const fetchData = () => {
        axios.get (
            "https://api.covid19api.com/summary"
        ).then ((response) => {
            setData(response.data)
            setDataCopy(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    // console.log(data.Countries)

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(search);

        if (search === ''){
            // console.log("Empty");
            // console.log(dataCopy);

            // Get table length (Max length = 197)
            let tableLength = (data.Countries).length;
            if (tableLength < 197) {
                setData(dataCopy)
            }
            // else {
            //     console.log("No need to reset table")
            // }
        }
        else {
            // console.log("Not Empty");
            const searchResult = [];

            // console.log(data)

            const findWord = (data.Countries)?.map((item) => {
                if ((item.Country).includes (`${search}`)){
                    searchResult.push(item)
                }
                return searchResult
            })

            // console.log(searchResult)

            setData({...data, Countries: searchResult});
        }
    }

  return (
    <div>
        <h1 className='section-header'>GLOBAL SUMMARY TABLE :</h1>
        <div className='searchForm'>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Search by Country...' onChange={handleChange} />
                <input type="submit" value="Search" />
            </form>
        </div>

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
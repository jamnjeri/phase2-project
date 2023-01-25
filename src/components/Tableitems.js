import React from 'react'

function Tableitems( { id, country, countryCode, date, totalCases, totalDeaths } ) {

    console.log(country);
    
  return (
    <tr>
        <td>{country}</td>
        <td>{countryCode}</td>
        <td>{date}</td>
        <td>{totalCases}</td>
        <td>{totalDeaths}</td>
    </tr>
  
  )
}

export default Tableitems

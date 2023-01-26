
import React, { useState, useEffect} from 'react'
import { Card, CardContent, FormControl, MenuItem, Select} from '@material-ui/core'
import Info from './Info'
import Table from './Table'
import './Area.css'
import { sortData, prettyPrintStat} from './Tools'



function Area() {
  const [countries,setCountries]= useState([])
  const [country, setCountry] = useState('worldwide')
  const [countryInfo, setCountryInfo] = useState({})
  const [tableData, setTableData]= useState([])
  const [casesType, setCasesType] = useState("cases")

  useEffect(()=>{
    fetch("https://disease.sh/v3/covid-19/all")
    .then((response)=> response.json())
    .then((data)=>{
       setCountryInfo(data)
    })
  },[])

  useEffect(()=>{
  const getCountriesData = async () => {
    await fetch("https://disease.sh/v3/covid-19/countries")
    .then((response) => response.json())
    .then((data)=>{
      const countries = data.map((country)=>(
        {
          name:country.country,
          value:country.countryInfo.iso2
        }
      ))
      const sortedData = sortData(data)
      setTableData(sortedData)
      setCountries(countries)

    })
  }
  getCountriesData()
 },[])
 const onCountryChange = (event)=>{
  const countryCode = event.target.value
 

  const url = countryCode === 'worldwide'
  ? 'https://disease.sh/v3/covid-19/all'
  : `https://disease.sh/v3/covid-19/countries/${countryCode}`

  fetch(url)
     .then((response)=> response.json())
     .then((data)=>{
      setCountry(countryCode)
      setCountryInfo(data)
     })
}
// console.log("COUNTRY INFO=",countryInfo);
  return (
    <div className='app'>
    <div className='app_left'>
    <div className='app_header'>
    <h1>Covid 19 App</h1>
    <FormControl className='app_dropdown'>
    <Select variant="outlined"  onChange={onCountryChange} value={country}>
    <MenuItem value="worldwide">Worldwide</MenuItem>
      {countries.map((country,index) =>(
        <MenuItem key={index} value={country.value}>{country.name}</MenuItem>
      ))}
    </Select>
    </FormControl>
    </div>
    <div className='app_stats'>
      <Info
      title="Coronavirus Cases" 
      cases={prettyPrintStat(countryInfo.todayCases)}
      total={prettyPrintStat(countryInfo.cases)}
      />
      <Info
      title="Recovered" 
      cases={prettyPrintStat(countryInfo.todayRecovered)} 
      total={prettyPrintStat(countryInfo.recovered)}
      />
      <Info 
      title="Deaths" 
      cases={prettyPrintStat(countryInfo.todayDeaths)} 
      total={prettyPrintStat(countryInfo.deaths)}
      />

    </div>
    </div>
    <Card className='app_right'>
      <CardContent>
      <h3>Live cases by country</h3>
      <Table countries={tableData}/>
      </CardContent>
    </Card>
    </div>
  )
}

export default Area
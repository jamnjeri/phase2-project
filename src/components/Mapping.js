
import React, { useState, useEffect } from "react";
import "./mapping.css";
import {
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import InfoBox from "./InfoBox"
import {  prettyPrintStat } from "./Util";
import numeral from "numeral";
import Mapp from "./Mapp";
import "leaflet/dist/leaflet.css";

const Mapping = () => {
  const [country, setInputCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [countries, setCountries] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(0.5);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

// asyn -> send request to server, wait for it and then do something with the info
  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {

// loop through the {data}from the api and return the country name and country code 
          const countries = data.map((country) => ({
            name: country.country,// country name ie united states, kenya
            value: country.countryInfo.iso2,// country code ie  , ke = 254
          }));
          
          setCountries(countries);
          setMapCountries(data);
          
        });
    };
// call out the {data}
    getCountriesData();
  }, []);

  console.log(casesType);

// An event listener that listens when we change th ecountry and when click the dropdown the user gets the selected value that clicks on
  const onCountryChange = async (e) => {
    const countryCode = e.target.value;

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInputCountry(countryCode);
        setCountryInfo(data);
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      });
  };

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
{/* header */}
          <h1>COVID-19 Tracker Map</h1>
{/*material ui gives you a dropdown menu*/}
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              value={country}


              onChange={onCountryChange}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>

{/*loop through all the countries and show a dropdownlist of all the couintries */}
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="app__stats">

{/*coronavirus infobox */}
          <InfoBox
            onClick={(e) => setCasesType("cases")}
            title="Coronavirus Cases"
            isRed
            active={casesType === "cases"}
            cases={prettyPrintStat(countryInfo.todayCases)}
            total={numeral(countryInfo.cases).format("0.0a")}
          />


              {/*recoveres infobox */}
          <InfoBox
            onClick={(e) => setCasesType("recovered")}
            title="Recovered"
            active={casesType === "recovered"}
            cases={prettyPrintStat(countryInfo.todayRecovered)}
            total={numeral(countryInfo.recovered).format("0.0a")}
          />

{/*  deaths infobox*/}
          <InfoBox
            onClick={(e) => setCasesType("deaths")}
            title="Deaths"
            isRed
            active={casesType === "deaths"}
            cases={prettyPrintStat(countryInfo.todayDeaths)}
            total={numeral(countryInfo.deaths).format("0.0a")}
          />
        </div>

 {/*map component */}
        <Mapp
          countries={mapCountries}
          casesType={casesType}
          center={mapCenter}
          zoom={mapZoom}
        />
      </div>
    
    </div>
  );
};

export default Mapping
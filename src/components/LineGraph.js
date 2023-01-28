import React, { useState, useEffect } from 'react'
import styles from './lineGraph.css'
import axios from 'axios'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function LineGraph() {

    const [cases, setCases] = useState([])
    const [deaths, setDeaths] = useState([])
    const [recovered, setRecovered] = useState([])

    useEffect(() => {
        fetchSummary()
    }, [])

    const fetchSummary = () => {
        axios.get (
            "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
        ).then ((response) => {
            // console.log(response.data)
            setCases(response.data.cases)
            setDeaths(response.data.deaths)
            setRecovered(response.data.recovered)

        }).catch((error) => {
            console.log(error)
        })
    }

    // console.log(recovered)

    // Seperate the keys and values

    // CASES
    // Values
    let casesvaluesArray = Object.values(cases);
    // console.log(casesvaluesArray)
    // Keys
    let caseskeysArray = Object.keys(cases);
    // console.log(caseskeysArray)


    // DEATHS
    // Values
    let deathsvaluesArray = Object.values(deaths);
    // console.log(deathsvaluesArray)
    // Keys
    let deathskeysArray = Object.keys(deaths);
    // console.log(deathskeysArray)


    // RECOVERED
    // Values
    let recoveredvaluesArray = Object.values(recovered);
    // console.log(recoveredvaluesArray)
    // Keys
    let recoveredkeysArray = Object.keys(recovered);
    // console.log(recoveredkeysArray)


    // LINE GRAPH
    
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'World Summary Line Chart',
          },
        },
    };

    const labels = caseskeysArray;


    const data = {
        labels,
        datasets: [
          {
            label: 'Cases',
            data: casesvaluesArray,
            borderColor: '#111111',
            backgroundColor: '#111111',
            borderWidth: 1,
          },
          {
            label: 'Deaths',
            data: deathsvaluesArray,
            borderColor: '#c81d25',
            backgroundColor: '#c81d25',
            borderWidth: 1,
          },
          {
            label: 'Recoveries',
            data: recoveredvaluesArray,
            borderColor: '#38b000',
            backgroundColor: '#38b000',
            borderWidth: 2,
          },
        ],
      };


  return (
    <div className='graph-area'>
        <div className='line-graph'>
            <Line options={options} data={data} />
        </div>
    </div>
  )
}

export default LineGraph
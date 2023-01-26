import React, { useState, useEffect } from 'react'
import styles from "./piechart.css"
import axios from 'axios'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {

    const [all, setAll] = useState([])

    const input = {
        labels: ['Population', 'Cases', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: '# of People',
            data:  all,
            backgroundColor: [
              '#00b4d8',
              '#111111',
              '#38b000',
              '#c81d25',
            ],
            borderColor: [
              '#00b4d8',
              '#111111',
              '#38b000',
              '#c81d25',
            ],
            borderWidth: 1,
          },
        ]
    }

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = () => {
        axios.get (
            "https://disease.sh/v3/covid-19/all"
        ).then ((response) => {
            // console.log(response.data)
            let x = [];
            let population = response.data.population;
            let cases = response.data.cases;
            let recovered = response.data.cases;
            let deaths = response.data.deaths;
            x.push(population, cases, recovered, deaths)
            setAll(x)

        }).catch((error) => {
            console.log(error)
        })
    }

    // console.log(all)

  return (
    <div className='area'>
        <div className='pie-chart'>
            <Pie data={input} />
        </div>
        
    </div>
  )
}

export default PieChart
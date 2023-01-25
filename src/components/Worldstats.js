import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from "./worldstats.css"

function Worldstats() {

    const [stats, setStats] = useState({
        TotalConfirmed: 0,
        TotalDeaths: 0,
        TotalRecovered: 0
    })

    useEffect(() => {
        fetchStats()
    }, [])


    const fetchStats = () => {
        axios.get (
            "https://api.covid19api.com/world/total"
        ).then ((response) => {
            setStats(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    // console.log(stats)

    const current = new Date();
    // console.log(current)
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    // console.log(date)

  return (
    <>
        <h1 className='section-header'>WORLD STATISTICS :</h1>
        <div className='display-area'>
            <div className='card-container'>
                <div className='card one' >
                    <div className="card-body">
                        <h4 className="card-title">TOTAL CASES: <i className="fas fa-user-injured"></i></h4>
                        <p className="card-text">{stats.TotalConfirmed}</p>
                        <div className='last-row'>
                            <p>Last updated: {date} </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='card-container'>
                <div className='card two' >
                    <div className="card-body">
                        <h4 className="card-title">TOTAL DEATHS: <i className="fas fa-bed"></i></h4>
                        
                        <p className="card-text">{stats.TotalDeaths}</p>
                        <div className='last-row'>
                            <p>Last updated: {date} </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='card-container'>
                <div className='card three' >
                    <div className="card-body">
                        <h4 className="card-title">TOTAL RECOVERED:  <i className="fas fa-user-plus"></i></h4>
                        <p className="card-text">{stats.TotalRecovered}</p>
                        <div className='last-row'>
                            <p>Last updated: {date} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Worldstats
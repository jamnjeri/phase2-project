import React from 'react'
import styles from "./graphs.css"
import LineGraph from './LineGraph'
import PieChart from './PieChart'

function Graphs() {
  return (
    <div>
      <h3 className='pie-title'>World Covid-19 Cases Summary :</h3>
      <PieChart />
      <LineGraph />
    </div>
  )
}

export default Graphs
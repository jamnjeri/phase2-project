import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Worldstats from './Worldstats'
import Globalsummary from './Globalsummary'
import Graphs from './Graphs'

function HomeBody() {
  return (
    <div>
      
      <Worldstats />
      <Graphs />
      <Globalsummary />
    </div>
  )
}

export default HomeBody
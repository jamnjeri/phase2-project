import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Worldstats from './Worldstats'
import Globalsummary from './Globalsummary'
import Graphs from './Graphs'
import Description from './Description'

function HomeBody() {
  return (
    <div>
      <Description />
      <Worldstats />
      <Graphs />
      <Globalsummary />
    </div>
  )
}

export default HomeBody
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Worldstats from './Worldstats'
import Globalsummary from './Globalsummary'

function HomeBody() {
  return (
    <div>
      <Worldstats />

      <Globalsummary />
    </div>
  )
}

export default HomeBody
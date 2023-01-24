import React, { useState, useEffect} from 'react'
import axios from 'axios'

function HomeBody() {
    const [countries, setCountries] = useState()

    useEffect(() => {
        fetchCountries()
    }, [])


    const fetchCountries = () => {
        axios.get (
            "https://api.covid19api.com/countries"
        ).then ((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

  return (
    <div>HomeBody</div>
  )
}

export default HomeBody
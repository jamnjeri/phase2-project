import React from 'react'
import styles from './description.css'
import Explanation from './Explanation'

function Description() {
  return (
    <>
        <div className='Description'>
            <div className='Intro'>
                <h5>Welcome to <strong className='emphasis'>COVIDOLOGY, </strong></h5>
                <h5 className='tag'> A quick guide to all things COVID-19 related.</h5>
            </div>
        </div>
        <Explanation />
    </>

  )
}

export default Description
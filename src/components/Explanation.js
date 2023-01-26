import React from 'react'
import styles from './description.css'

function Explanation() {
  return (
    <>
        <h1 className='section-title'>COVID-19</h1>
        <h5>Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.</h5>
        <div className='Bcontainer'>
            <div className='Ccontainer first'>
                <h2><a href='https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html'>Symptoms:</a> </h2>
                <ul className='symptoms'>
                    <li>Cough</li>
                    <li>Fatigue</li>
                    <li>Muscle or body aches</li>
                    <li>Headache</li>
                    <li>Loss of taste or smell</li>
                    <li>Nausea or vomiting</li>
                    <li>Sore throat</li>
                    <li>Congestion or runny nose</li>
                    <li>Diarrhea</li>
                </ul>
                <p className='content'>Most people infected with the virus will experience mild to moderate respiratory illness and recover without requiring special treatment. However, some will become seriously ill and require medical attention.</p>
                <p className='content'>Older people and those with underlying medical conditions like cardiovascular disease, diabetes, chronic respiratory disease, or cancer are more likely to develop serious illness. Anyone can get sick with COVID-19 and become seriously ill or die at any age. <a href='https://www.who.int/health-topics/coronavirus#tab=tab_1'>(World Health Organization)</a></p>       
            </div>
            <div className='Ccontainer second'>
                <h2><a href='https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html'>When to seek medical attention:</a></h2>
                <ul className='symptoms'>
                    <li>Trouble breathing</li>
                    <li>Persistent pain or pressure in the chest</li>
                    <li>New confusion</li>
                    <li>Inability to wake or stay awake</li>
                    <li>Pale, gray, or blue-colored skin, lips, or nail beds, depending on skin tone</li>
                </ul> 
                <h3>How it spreads:</h3>
                <p className='content'>COVID-19 spreads when an infected person breathes out droplets and very small particles that contain the virus. These droplets and particles can be breathed in by other people or land on their eyes, noses, or mouth. In some circumstances, they may contaminate surfaces they touch.</p>
                <p className='disclaimer'><strong>Anyone infected with COVID-19 can spread it, even if they do NOT have symptoms.</strong></p>      
            </div>
        </div>
    </>


  )
}

export default Explanation
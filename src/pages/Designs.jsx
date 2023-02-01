// REACT IMPORTS
import React from 'react'

import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

const Home = () => {

  return (
    <div className='design'>
      <div className='h-100'>

      <Tabs
        defaultActiveKey="logos"
        id="justify-tab-example"
        className="mb-3"
        justify
        // variant='pills'
      >
        <Tab eventKey="logos" title="Logos">
          Logos here
        </Tab>
        <Tab eventKey="events" title="Event posters">
          posters here
        </Tab>
        <Tab eventKey="illustrations" title="Illustrations">
          illustrations here
        </Tab>
      </Tabs> 
      </div>


    </div>
  )
}

export default Home

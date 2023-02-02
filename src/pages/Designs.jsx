// REACT IMPORT
import React from 'react'

// REACT-BOOTSTRAP IMPORTS
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

// COMPONENTS IMPORTS
import LogosContainer from '../components/LogosContainer'

const Designs = () => {

  return (
    <div className='designs'>
      <div className='h-100'>

      <Tabs
        defaultActiveKey="logos"
        id="justify-tab-example"
        className="mb-3"
        justify
        // variant='pills'
      >
        <Tab eventKey="logos" title="Logos">
          <LogosContainer />
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

export default Designs

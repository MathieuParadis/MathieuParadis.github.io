// REACT IMPORT
import React from 'react'

// REACT-BOOTSTRAP IMPORTS
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

// COMPONENTS IMPORTS
import ImagesContainer from '../components/ImagesContainer'

// DATA IMPORTS
import { illustrations, logos, posters } from '../data/Designs'

const Designs = (): JSX.Element => {
  return (
    <div className='designs'>
      <div className='h-100'>
        <Tabs
          defaultActiveKey='logos'
          id='justify-tab-example'
          className='mb-3'
          justify
        >
          <Tab eventKey='logos' title='Logos'>
            <ImagesContainer images={logos} />
          </Tab>
          <Tab eventKey='events' title='Event posters'>
            <ImagesContainer images={posters} />
          </Tab>
          <Tab eventKey='illustrations' title='Illustrations'>
            <ImagesContainer images={illustrations} />
          </Tab>
        </Tabs> 
      </div>

    </div>
  )
}

export default Designs

import React, { Component } from 'react'
import Footer from '../Homepage_Components/Footer'
import Lease from '../Service_Components/Lease'
export class Service extends Component {
  render() {
    return (
      <div className='service'>
        <Lease/>
        
        <Footer/>

      </div>
    )
  }
}

export default Service
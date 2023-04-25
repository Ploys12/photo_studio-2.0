import React, { Component } from 'react'
import Description from '../Contacts_Components/Description'
import Footer from '../Homepage_Components/Footer'
import Employeers from '../Contacts_Components/Employeers'
export class Contacts extends Component {
  render() {
    return (
      <div className='contacts'>
        <Description/>
        <Employeers/>
        <Footer/>

        


      </div>
    )
  }
}

export default Contacts
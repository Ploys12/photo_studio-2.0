import React, { Component } from 'react'
import Presentation from '../Homepage_Components/Presentation'
import Our_Job from '../Homepage_Components/Our_Job'
import Feedback from '../Homepage_Components/Feedback'
import Footer from '../Homepage_Components/Footer'

import First from '../img/first.jpg'
import Second from '../img/third.jpg'
import Third from '../img/fourth.jpg'
import Fourth from '../img/fiveth.jpg'

import Trust from '../img/trust.jpg'

import first_family from '../img/first_family.png'
import second_family from '../img/second_family.jpg'
import third_family from '../img/third_family.jpg'
import fourth_family from '../img/fourth_family.jpg'

class Homepage extends Component {
  render() {
    return (
      <div className='homepage'>
        <Presentation/>
        <Our_Job alt="" first={First} second={Second} third={Third} fourth={Fourth}/>
        <Feedback src={Trust} first_family={first_family} second_family={second_family} third_family={third_family} fourth_family={fourth_family}/>
        <Footer/>
      </div>
      
    )
  }
}

export default Homepage
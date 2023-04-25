

import React, { Component } from 'react'
import Presentation from '../Homepage_Components/Presentation'
import Our_Job from '../Homepage_Components/Our_Job'
import First from '../img/first.jpg'
import Second from '../img/third.jpg'
import Third from '../img/fourth.jpg'
import Fourth from '../img/fiveth.jpg'
class Homepage extends Component {
  render() {
    return (
      <div className='homepage'>
        <Presentation/>
        <Our_Job alt="" first={First} second={Second} third={Third} fourth={Fourth}/>

      </div>
      
    )
  }
}

export default Homepage
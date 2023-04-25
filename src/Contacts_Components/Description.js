import React, { Component } from 'react'

import { BsFillBalloonHeartFill, BsArrowDown } from 'react-icons/bs'

export class Description extends Component {
  render() {
    return (
      <div className='contacts_description'>
        <span className='contacts_description_text'>Наши специалисты всегда оперативно и
         вежливо связываются с посетителями! Позвоните нам, либо оставьте заявку!</span>
        <BsFillBalloonHeartFill className='desc_heart' onClick={() => {
                    window.scrollTo( {top: 570, behavior: "smooth"} )
                }}/>
        {/* <BsArrowDown className='desc_arrow' onClick={() => {
                    window.scrollTo( {top: 200, behavior: "smooth"} )
                }}/> */}
        
      </div>
    )
  }
}

export default Description
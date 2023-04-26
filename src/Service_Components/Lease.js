import React, { Component } from 'react'
import first_holl from '../img/holl_first.jpg'
import second_holl from '../img/second_holl.jpg'
import third_holl from '../img/third_holl.jpg'
import first_employee from '../img/first_employee.jpg'
import second_employee from '../img/photograph_two.jpg'
import third_employee from '../img/third_photograph.jpg'
export class Lease extends Component {
  render() {
    return (
        <div className='location_lease'>
            <span className='holl_inscription'>Аренда зала</span>
        <div className='holl_lease'>
            
          <div className='holl first'>
            
            <img src={first_holl} className='holl_img first'></img>
            <p className='holl_location'>Фотозал "Любимый"</p>
            <p className='holl_price'>1500₽/час</p>
          </div>
          <div className='holl second'>
            <img src={second_holl} className='holl_img second'></img>
            <p className='holl_location'>Фотозал "Семейный"</p>
            <p className='holl_price'>2300₽/час</p>
          </div>
          <div className='holl third'>
            <img src={third_holl} className='holl_img third'></img>
            <p className='holl_location'>Фотозал "Феерия"</p>
            <p className='holl_price'>2900₽/час</p>
          </div>
        </div>
        <span className='photo_inscription'>Услуги фотографа</span>
        <div className='photo_lease'>
          <div className='photo first'>
          <img className='holl_img third' src={second_employee}></img>
            <p className='holl_location'>Фотограф Мария</p>
            <p className='holl_price'>900₽/час</p>
          </div>
          <div className='photo second'>
          <img className='holl_img third emp' src={third_employee}></img>
            <p className='holl_location'>Фотограф Алексей</p>
            <p className='holl_price'>1200₽/час</p>
          </div>
          <div className='photo third'>
          <img className='holl_img third' src={first_employee}></img>
            <p className='holl_location'>Фотограф Анастасия</p>
            <p className='holl_price'>1700₽/час</p>
          </div>
        </div>
        <span className='suit_inscription'>Аренда костюмов</span>
        <div className='suite_lease'>
          <div className='suit first'></div>
          <div className='suit second'></div>
          <div className='suit third'></div>
        </div>
      </div>
    )
  }
}

export default Lease
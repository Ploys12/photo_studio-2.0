import React, { Component } from 'react'
import first_employee from '../img/first_employee.jpg'
import second_employee from '../img/second_employee.jpg'
export class Employeers extends Component {
  render() {
    return (
      <div className='employeers'>
        <div className='emp_items'>
            <div className='emp_item first'>
              <img src={first_employee} className='img_em f'></img>
              <div>
              <span className='emp_name f'>Анастасия</span>
              <p className='emp_w f'>Фотограф</p>
              <p className='em_n f'>+79931952165</p>
              </div>
            </div>
            <div className='emp_item second'>
              <img src={second_employee} className='img_em s'></img>
              <div>
              <span className='emp_name s'>Наталья</span>
              <p className='emp_w s'>Менеджер</p>
              <p className='em_n s'>+79397432015</p>
              </div>
            </div>
        </div>

      </div>
    )
  }
}

export default Employeers
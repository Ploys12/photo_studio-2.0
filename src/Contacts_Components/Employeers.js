import React, { Component } from 'react'
import first_employee from '../img/first_employee.jpg'
import second_employee from '../img/second_employee.jpg'
export class Employeers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      showForm: false
    };
  }


  

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
    
    
  }
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
        <button onClick={this.toggleForm} className='button_contact contacts'>
              Связаться
            </button>
            {this.state.showForm && (
              <form className='contact_form'>
                <label>
                  Имя:
                  <br></br>
                  <input type="text" />
                </label>
                <br></br>
                <label>
                  Почта:
                  <br></br>
                  <input type="email" />
                </label>
                <br></br>
                <label>
                  Телефон:
                  <br></br>
                  <input type="text" />
                </label>
                <button type="submit" className='send'>Отправить</button>
              </form>
            )}

      </div>
    )
  }
}

export default Employeers
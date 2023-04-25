import Homepage from './Pages/Homepage';
import './App.css';
import About from './Pages/About';
import Contacts from './Pages/Contacts';
import Service from './Pages/Service';
import logo from './img/logo.png'
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className='zagolovok'>
    <header>
    <Link to="/"><img src={logo} alt='' className='logo'></img></Link>
      <ul className='nav'>
        <li><Link to='/'>Главная</Link></li>
        <li><Link to='/contacts'>Контакты</Link></li>
        <li><Link to='/service'>Услуги</Link></li>
        <li><Link to='/about'>О нас</Link></li>
      </ul>
    </header>
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/contacts' element={<Contacts/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
    </div>
    
  );
}

export default App;

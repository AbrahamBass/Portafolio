import React, {useContext, useEffect} from 'react';

// Styles
import '../Style/HomeStyle.css';


//I import the context
 import {ContextsApp} from '../Context/ContextApp'

// I import the icons from Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// I import the icons from React Icon
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// Imgs
import logo from '../Img/logoAA.svg'

//I import the components
import NavComponent from '../Components/NavComponent';
import NavMovilComoponent from '../Components/NavMovilComoponent'

//  We Import React Router Dom
import { Link } from "react-router-dom";

const HomePage = () => {
  const {menu,$handleClickMenu} = useContext(ContextsApp)

  useEffect(() => {
    document.title = 'Abraham || Web Developer'
  }, [])
 
  return (
    
    <div >
      <div>    
        <div className='Menu-Deskto'>
          <NavComponent />
        </div>

        <div className={menu ? 'open' : 'close'}>
            <NavMovilComoponent />
        </div>

    <div>
        <div >
          <div className='div-icon'>
            <FontAwesomeIcon icon={faBars} onClick={$handleClickMenu}  />
          </div>
          <div className='conteiner-principal'>
            <div className='present'>
              <div>
                <h1 className='sect'>Hi,</h1>
                <h1 className='sect sect-logo'>I'm <img src={logo} alt="img" className='img'/>braham,</h1>
                <h1 className='sect'>Web Developer</h1>
              </div> 
            </div>
            <div className='div-btn'>
              <Link to='/contact'> <button className='btn'>Contact me!</button></Link>
            </div>
          </div>
          
        </div>
        
                
        <div >
          <div className="div-potfolio">
            <div >
              <div>
                <div className='div-my-potfolio'>
                  <h1 className=' mt-4 text-portfolio'>My Portfolio</h1>
                </div>
                <div className='div-text-potfolio'>
                  <p className='mt-4 text-parrafo'>My portfolio is made up of personal projects focused on Frontend. I am very passionate about creating things related to technology and art</p>
                </div>
              </div>

              <div>

              </div>
            </div>
          </div>

          </div>

          <div>
            <div className='footer'>
              <div className='div-links'>
                <a href="https://github.com/AbrahamBass" className='text-gray-400 text-4xl mr-4 hover:text-gray-300'><FaGithub /></a>
                <a href="https://www.linkedin.com/in/abraham-ariza-29a1a1245/" className='text-gray-400 text-4xl hover:text-gray-300'><FaLinkedin /></a>
              </div>
            </div>
          </div>
          
      </div>
      
    </div>

  </div>

  )
}

export default HomePage
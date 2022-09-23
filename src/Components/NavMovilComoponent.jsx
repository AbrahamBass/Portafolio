import React, {useContext} from 'react'

//Import css
import '../Style/NavMovilStyle.css'

//Import contexts
import {ContextsApp} from '../Context/ContextApp'

//  We Import React Router Dom
import { Link } from "react-router-dom";

// I import the icons from Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

// I import the icons from React Icon
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// Import styled component
import { DivMovile, DivPrent, DivNavMovil, NavMovil, DivIcons } from '../Elements/NavMovilElement'

// Imgs
import logoMovil from '../Img/logoAA.svg'

const NavMovilComoponent = () => {
  const {$handleClickMenu} = useContext(ContextsApp)
  return (
    <div>
        <DivMovile>
          <div>
            <div className='div-movile'>
              <div className='absolute right-10 top-10 text-3xl cursor-pointer '>
                <FontAwesomeIcon icon={faXmark}  onClick={$handleClickMenu}/>
              </div>
              <DivPrent>
                <Link to="/"><img src={logoMovil} alt="img" /></Link>
                <h3 className='text-name'>Abraham</h3>
                <p className='text-front'>Frontend Developer</p>
              </DivPrent>
              <DivNavMovil>
                <NavMovil>
                  <Link to="/about" className='p-4 border-color w-full grid justify-items-center text'>Abaout</Link>
                  <Link to="/skill"  className='p-4 border-color w-full grid justify-items-center text'>My Skill</Link>
                  <Link to="/contact"  className='p-4 border-color border-set w-full grid justify-items-center text-color'>Contact</Link>
                </NavMovil>
                <DivIcons>
                  <a href="https://github.com/AbrahamBass" className='text-gray-400 text-2xl mr-4 hover:text-gray-300'><FaGithub /></a>
                  <a href="https://www.linkedin.com/in/abraham-ariza-29a1a1245/" className='text-gray-400 text-2xl hover:text-gray-300'><FaLinkedin /></a>
                </DivIcons>
              </DivNavMovil>
            </div>
          </div>
        </DivMovile>
    </div>
  )
}

export default NavMovilComoponent
import React from 'react'

// Import css
import '../Style/NavStyle.css'

// Import styled component
import {Navegacion, NavBar, Logo, DivIcons } from '../Elements/NavElement'

//  We Import React Router Dom
import { Link } from "react-router-dom";

// Imgs
import logoNav from '../Img/logoAA.svg'

// I import the icons from React Icon
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const NavComponent = () => {
  return (
    <div>
      <Navegacion>
        <div>
          <Logo>
            <Link to='/' className='lg-text text-8xl '><img src={logoNav} alt="img" className='img' /></Link>
            <h2 className='text-white mt-2'>Abraham</h2>
            <p className="text-xs text-gray-500 mt-2">Frontend Developer</p>
          </Logo>

          <div>
            <NavBar>
              <Link to="/about" className='p-3  color'>About Me</Link>
              <Link to="/skill" className='p-3  borde'>My Skill</Link>
              <Link to="/contact" className='p-3  borde set'>Contact</Link>
            </NavBar>
          </div>

          <DivIcons>
            <a href="https://github.com/AbrahamBass" className='mr-3 text-gray-500 hover:text-gray-300'><FaGithub /></a>
            <a href="https://www.linkedin.com/in/abraham-ariza-29a1a1245/" className='text-gray-500 hover:text-gray-300'><FaLinkedin /></a>
          </DivIcons>

        </div>
      </Navegacion>
    </div>
  )
}

export default NavComponent
import React, {useContext, useEffect} from 'react'

// Import Components
import Map from '../Components/Map'
import NavComponent from '../Components/NavComponent'
import NavMovilComoponent from '../Components/NavMovilComoponent'
import LoaderComponent from '../Components/LoaderComponent'

// Styles
import '../Style/ContactStyle.css'

// I import the icons from React Icon
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

// I import the icons from Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// import Context 
import {ContextsApp} from '../Context/ContextApp'

const ContactPage = () => {
  const {contactAnimation,setContactAnimation,menu,$handleClickMenu} = useContext(ContextsApp)

  useEffect(() => {
    document.title = 'Abraham || Contact Me';
  }, [])

  useEffect(() => {
    setContactAnimation(true)
    setTimeout(() => {
      setContactAnimation(false)
    }, 2000)
  }, [])

  return (
    <div>
      {
        contactAnimation ?
        <div>
          <LoaderComponent />
        </div>
        :
        <>
          <div className='menu-destok-contact'>
            <NavComponent />
          </div>

          <div className={menu ? '' : 'close-contact'}>
            <NavMovilComoponent />
          </div>
          <div className='menu-icon-contact'>
          <FontAwesomeIcon icon={faBars} onClick={$handleClickMenu} />
          </div>
          <div className='contenedor-contact'>
            <div>
              <div>
                <div className='div-titulo-contact'>
                  <h3 className='titulo-contact'>@abraham.a_99</h3>
                </div>
                <div className='div-parrafo-contact'>
                  <p className='parrafo-contact'>Feel free to leave a message in any of my socials.</p>
                </div>
              </div>

              <div className='div-iconos-contact'>
                <a href="https://github.com/AbrahamBass" className='text-gray-400 text-4xl hover:text-gray-300 mt-4 mr-6'><FaGithub /></a>
                <a href="https://www.linkedin.com/in/abraham-ariza-29a1a1245/" className='text-gray-400 text-4xl hover:text-gray-300 mt-4 mr-6'><FaLinkedin /></a>
                <a href="https://www.instagram.com/abraham.a_99/" className='text-gray-400 text-4xl hover:text-gray-300 mt-4 ml-2'><FaInstagram /></a>
              </div>
            </div>

            <div className={menu ? 'mapa-close' : 'mapa'}>
              <Map />
            </div>
          </div>
        </>
      }
      
    </div>
  )
}

export default ContactPage
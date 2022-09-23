import React, {useContext, useEffect} from 'react'

// Styles 
import '../Style/SkillStyle.css'

//I import the components
import NavComponent from '../Components/NavComponent'

// Imgs
import Html from '../Img/LogoTipos/html-5.png' 
import Css from '../Img/LogoTipos/css-3.png'
import Js from '../Img/LogoTipos/js.png'
import Reeact from '../Img/LogoTipos/physics.png'
import Git from '../Img/LogoTipos/git.png'
import Tailwind from '../Img/LogoTipos/tailwindcss-icon.svg'

// Components
import SkillComponent from '../Components/SkillComponent'
import NavMovilComoponent from '../Components/NavMovilComoponent'
import LoaderComponent from '../Components/LoaderComponent'

// Import Context
import {ContextsApp} from '../Context/ContextApp'

//  We Import React Router Dom
import { Link } from "react-router-dom";

// I import the icons from Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const SkillPage = () => {
  const {menu,$handleClickMenu, skillAnimation, setSkillAnimation} = useContext(ContextsApp)

  useEffect(() => {
    setSkillAnimation(true)
    setTimeout(() => {
      setSkillAnimation(false)
    }, 2000)
  }, [])

  useEffect(() => {
    document.title = 'Abraham || My Skill'
  }, [])

  return (
    <div>
      {
        skillAnimation ?
        <div>
          <LoaderComponent />
        </div>
        :
        <>
        <div className='div-menu-destok'>
          <NavComponent />
        </div>
        <div className={menu ? 'open-skill' : 'close-skill'}>
          <NavMovilComoponent />
        </div>
        <div className='icono-skill'>
          <FontAwesomeIcon icon={faBars} onClick={$handleClickMenu} />
        </div>
        <div>

        </div>
        <div className='contenedor-skill'>
          <div>
            <div className='div-titulo-skillo'>
              <h1 className='titulo-skill'>My Skills</h1>
            </div>
            <div className='div-parrafo-skill'>
              <p className='parrafo-skill'>I am a highly skilled developer with more than 1 year of experience.</p>
            </div>
            <div className='div-parrafo-skill'>
              <p className='parrafo-skill'>I create successful responsive websites that are fast, easy to use and built with best practices. The main area of ​​my expertise is frontend html css js development, building small to medium web applications, custom plugins, features, animations and coding interactive layouts.</p>
            </div>
            <div className='div-parrafo-skill'>
              <p className='parrafo-skill'>Visit my <a href="https://www.linkedin.com/in/abraham-ariza-29a1a1245/" className='color-a'>linkedin</a> profile for more details or just <Link to="/contact" className='color-a'>contact me</Link></p>
            </div>
          </div>

          <div>
            <div>
            <SkillComponent 
            imagen={Html}
            tecnologia='Html'
            />
            <div className='div-animacion'>
                <div className='animacion-uno'></div>
              </div>
            </div>

            <div>
              <SkillComponent 
              imagen={Css}
              tecnologia='Css'
              />
              <div className='div-animacion'>
                <div className='animacion-dos'></div>
              </div>
            </div>

            <div>
              <SkillComponent 
              imagen={Js}
              tecnologia='JavaScript'
              />
              <div className='div-animacion'>
                <div className='animacion-tres'></div>
              </div>
            </div>

            <div>
              <SkillComponent 
              imagen={Reeact}
              tecnologia='React'
              />
              <div className='div-animacion'>
                <div className='animacion-cuatro'></div>
              </div>
            </div>

            <div>
              <SkillComponent 
              imagen={Git}
              tecnologia='Git'
              />
              <div className='div-animacion'>
                <div className='animacion-cinco'></div>
              </div>
            </div>

            <div>
              <SkillComponent 
              imagen={Tailwind}
              tecnologia='TailwindCss'
              />
              <div className='div-animacion'>
                <div className='animacion-seis'></div>
              </div>
            </div>
          </div>
        </div>
        </>

      }
      
    </div>
  )
}

export default SkillPage;

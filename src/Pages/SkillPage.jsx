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
import TypeScipt from '../Img/LogoTipos/typescript.svg'
import Angular from '../Img/LogoTipos/angularjs.svg'
import Redux from '../Img/LogoTipos/redux.svg'
import Rxjs from '../Img/LogoTipos/rxjs-1.svg'

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

          <div className='skills'>
            <div>
              <SkillComponent 
              imagen={Html}
              tecnologia='Html'
              />
            </div>

            <div>
              <SkillComponent 
              imagen={Css}
              tecnologia='Css'
              />
            </div>

            <div>
              <SkillComponent 
              imagen={Js}
              tecnologia='JavaScript'
              />           
            </div>

            <div>
              <SkillComponent 
              imagen={Reeact}
              tecnologia='React'
              />             
            </div>

            <div>
              <SkillComponent 
              imagen={Git}
              tecnologia='Git'
              />            
            </div>

            <div>
              <SkillComponent 
              imagen={Tailwind}
              tecnologia='TailwindCss'
              />            
            </div>

            <div>
              <SkillComponent 
              imagen={TypeScipt}
              tecnologia='TypeScipt'
              />            
            </div>

            <div>
              <SkillComponent 
              imagen={Angular}
              tecnologia='Angular'
              />            
            </div>

            <div>
              <SkillComponent 
              imagen={Redux}
              tecnologia='Redux'
              />            
            </div>

            <div>
              <SkillComponent 
              imagen={Rxjs}
              tecnologia='Rxjs'
              />            
            </div>


          </div>
        </div>
        </>

      }
      
    </div>
  )
}

export default SkillPage;

import React, {useContext, useEffect} from 'react'

// Styles
import '../Style/AboutStyle.css'

//I import the components
import NavComponent from '../Components/NavComponent'
import NavMovilComoponent from '../Components/NavMovilComoponent'
import LoaderComponent from '../Components/LoaderComponent'

// Imgs
import logoAbout from '../Img/palitos.png'

//I import the context
import {ContextsApp} from '../Context/ContextApp'

// I import the icons from Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const AboutPage = () => {
  const {setAnimation,animation,menu,$handleClickMenu} = useContext(ContextsApp)

  useEffect(() => {
    document.title = 'Abraham || About Me'
  }, [])

  useEffect(() => {
    setAnimation(true)
    setTimeout(() => {
      setAnimation(false)
    }, 2000)
  },[])

  return (
    
    <div>
      {
        animation ?
        <div>
          <LoaderComponent />
        </div>
        :
    <>
        <div className='menu-destok'>
        <NavComponent />
      </div>
      <div className={menu ? 'open-about' : 'close-about'}>
        <NavMovilComoponent />
      </div>
      <div className='div-icon-about'>
        <FontAwesomeIcon icon={faBars} onClick={$handleClickMenu}/>
      </div>
      <div className='contenedor-about-me'>
        <div>
          <div className='div-Titulo-About'>
            <h1 className='Titulo-About'>About Me</h1>
          </div>
          <div className='div-parrafo'>
            <p className='parrafo'>Hello, I am a frontend developer located in Colombia. I am a self-taught student. Developing frontend projects is one of my greatest passions. I also like that the user always has a dynamic experience.</p>
          </div>
          <div className='div-parrafo'>
            <p className='parrafo'>I am very passionate about creating things related to technology and art. I enjoy learning from platforms that help me improve my skills, such as FreeCodeCamp, Academia X, OpenBootcamp and TheOdinProject.</p>
          </div>
          <div className='div-parrafo'>
            <p className='parrafo'>I am organized and like to solve problems independently. In my free time I like to read books, watch movies, series and exercise.</p>
          </div>
          
        </div>

        <div className={menu ? 'cerrar' : ''}>
          <img src={logoAbout} alt="img"  className='img-about'/>
        </div>
      </div>
    </>
      }
      
    </div>
  )
}

export default AboutPage
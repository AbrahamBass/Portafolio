import React from 'react'

// Styles
import '../Style/LoaderStyle.css'

// Imgs
import LogoAnimation from '../Img/logoAA.svg'

const LoaderComponent = () => {
  return (
    <div className='contenedor-animation'>
      <div className='div-animation'>
        <img src={LogoAnimation} alt="img" />
        <h3 className='titulo-animation'>Abraham</h3>
        <p className='parrafo-animation'>Frontend Developer</p>
      </div>
      <span class="loader"></span>
    </div>
  )
}

export default LoaderComponent
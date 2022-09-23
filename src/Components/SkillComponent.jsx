import React from 'react'

// Styles 
import '../Style/SkillComStyle.css'

const SkillComponent = ({imagen, tecnologia}) => {
  return (
    <div>
      <div className='div-componente'>
        <img src={imagen} alt="img"  className="img-componente"/>
        <h3 className='titulo-tecnologia'>{tecnologia}</h3>
      </div>
    </div>
  )
}

export default SkillComponent;
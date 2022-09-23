// I import the react hook
import { createContext, useState } from "react";

// Created the context
export const ContextsApp = createContext();



export function ContextProvaider ({children}) {
  const [menu, setMenu] = useState(false);
  const [animation, setAnimation] = useState(true);
  const [skillAnimation, setSkillAnimation] = useState(true);
  const [contactAnimation, setContactAnimation] = useState(true);
  
  const $handleClickMenu = () => {
    setMenu(!menu)
  }


  return (
    <ContextsApp.Provider value={{
      menu,
      $handleClickMenu,
      animation,
      setAnimation,
      skillAnimation,
      setSkillAnimation,
      contactAnimation,
      setContactAnimation
    }}>
      {children}
    </ContextsApp.Provider>
  )
  
}
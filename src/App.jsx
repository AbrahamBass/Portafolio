// Styles
import './App.css'

// Import the pages
import HomePage from './Pages/HomePage.jsx'
import AboutPage from './Pages/AboutPage'
import SkillPage from './Pages/SkillPage'
import ContactPage from './Pages/ContactPage'

// Import context
import {ContextProvaider} from './Context/ContextApp'

//  We Import React Router Dom
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <ContextProvaider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skill" element={<SkillPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes> 
      </ContextProvaider>
    </div>
  )
}

export default App

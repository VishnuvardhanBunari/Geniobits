import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import FirstPage from './components/FirstPage'
import Personal from './components/Personal'
import Contact from './components/Contact'
import Job from './components/Job'

const App = () => (
  <>
    {/* In website click on add employee to visit other pages like personal details and after that click on option like contact for contact page and job to visit job page */}
    <div>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/job" element={<Job />} />
      </Routes>
    </div>
  </>
)

export default App

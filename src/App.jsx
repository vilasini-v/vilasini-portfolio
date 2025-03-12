import { useState } from 'react'
import { Navbar } from './components/header'
import { Routes, Route, Link } from "react-router-dom";
import { AboutMe } from './components/about'
import { Work } from './components/work';
import ContactCard from './components/contact';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/work" element={<Work/>}/>
        <Route path="/contact" element={<ContactCard/>}/>
      </Routes>
    </div>
  )
}

export default App

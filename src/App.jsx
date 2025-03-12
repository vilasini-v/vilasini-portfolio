import { useState } from 'react'
import { Navbar } from './components/header'
import { Routes, Route, Link } from "react-router-dom";
import { AboutMe } from './components/about'
import { Work } from './components/work';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/work" element={<Work/>}/>
      </Routes>
    </div>
  )
}

export default App

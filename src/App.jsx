import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home.jsx'
import { HashRouter, Route, Routes } from "react-router-dom";
import Contact from './pages/Contact'
import About from './pages/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/INICIO" element={<Home />}></Route>
          <Route path="/CONTACTO" element={<Contact />}></Route>
          <Route path="/NOSOTROS" element={<About />}></Route>
        </Routes>
    </>
  )
}

export default App
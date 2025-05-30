import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home.jsx";
import { HashRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Products from "./pages/Products.jsx";
import Services from "./pages/Services.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/INICIO" element={<Home />}></Route>
        <Route path="/NOSOTROS" element={<About />}></Route>
        <Route path="/PRODUCTOS" element={<Products />}></Route>
        <Route path="/CONTACTO" element={<Contact />}></Route>
        <Route path="/SERVICIOS" element={<Services />}></Route>
      </Routes>
    </>
  );
}

export default App;

import React from "react"
import Header from "./modules/_header/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./modules/_navigation/Home";
import About from "./modules/_navigation/About";
import TechStack from "./modules/_navigation/TechStack";

function App() {
  return (
    <main>
      <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/stack" element={<TechStack></TechStack>} />
      </Routes>
    </BrowserRouter>
    </main>
  )
}
export default App;
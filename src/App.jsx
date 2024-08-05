import React from "react";
import "./assets/globals.css";
import Header from "./components/Header/Header"
import Explore from "./pages/Explore/Explore";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

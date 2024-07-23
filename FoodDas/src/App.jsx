import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Menu from "./components/menu";
import Home from "./components/Home";
import Login from "./components/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<><Navbar /><Login /></>} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </>
  );
}

export default App;

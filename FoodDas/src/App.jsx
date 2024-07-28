import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Menu from "./components/menu";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Login from "./components/login";
import Signup from "./components/Signup"; // Import the Signup component

function App() {
  return (
    <>
       {/* Render Navbar globally */}
      <Routes>
        <Route path="/" element={<> <Navbar /><Home /> </>}  />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<> <Navbar /><Menu /> </>} />
        <Route path="/cart" element={<> <Navbar /><Cart /> </>} />
        <Route path="/signup" element={<Signup />} /> {/* Add the Signup route */}
        <Route path="/Home" element={<><Navbar /><Home /></>} />
      </Routes>
    </>
  );
}

export default App;

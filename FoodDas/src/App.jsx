import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import Footer2 from './components/Footer2'
import Login from './components/login';
import Signup from './components/Signup'
import items from './components/items';
import Cart from './components/Cart'
import Menu from './components/menu'


//import Card from './components/Card'

function App() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router> */}
      
      {/* <Navbar />
      <Hero />
      <Features />
     
        <Menu />
        
        <Footer /> */}
  
      <Menu />
    </>
  );
}

export default App;

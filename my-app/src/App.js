import * as React from 'react';
import "./App.css"
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import { Routes, Route, useLocation} from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";





export default function App() {

const blackBox = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const InitialTransition = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className="relative z-50 w-full bg-black"
        initial="initial"
        animate="animate"
          variants={blackBox}
      />      
    </div>
  );
};

const location = useLocation();


  return (
    
      <div className="page"> 
          <NavBar/>
          <AnimatePresence>
            <Routes location={location} key={location.pathname} >
              <Route path="/" element={<Home/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/about" element={<About/>} />
            </Routes>
        </AnimatePresence>
       
        <Footer/>
     </div>
     
     
    
  );
}

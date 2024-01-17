import * as React from 'react';
import "./App.css"
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import { Routes, Route, useLocation} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.25,
      when: "afterChildren",
    },
  },
};

const blackBox = {
  initial: {
    height: "100vh",
    bottom: 0,
    
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
      
    },
  },
};

const InitialTransition = () => {
  return (
      <motion.div        
        style={{position: 'absolute', zIndex: "50", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", backgroundColor: "black"}}
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
          document.body.classList.remove("overflow-hidden")
        }
      >      
        <motion.svg variants={textContainer} style= {{position: 'absolute', zIndex: "50", display: 'flex'}}>
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width={750}
            height={800}
            style={{color: 'white'}}
          >
            <rect style={{width: "100%", height: "100%", fill: "currentColor"}}/>
            <motion.rect variants={text} style= {{width: "100%", height: "100%", color: "#718096", fill: "currentColor"}}/>
          </pattern>
          <text
            text-anchor="middle"
            x="50%"
            y="50%"
            style={{ fill: "url(#pattern)", fontSize: "2.25rem", fontWeight: "700"}}
          >
            Loading...
          </text>
        </motion.svg>
      </motion.div>
  );
};

export default function App() {

const location = useLocation();

  return (
      <div className='container'> 
          <AnimatePresence>
            <InitialTransition/>
            <NavBar/>
            <Routes location={location} key={location.pathname} >
              <Route path="/" element={<Home/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/about" element={<About/>} />
            </Routes>
            <Footer/>
            
        </AnimatePresence>
        
        
     </div>
     
     
    
  );
}

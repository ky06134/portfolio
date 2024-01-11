import * as React from 'react';
import "./App.css"
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default function App() {

  let component
  switch (window.location.pathname) {
    case "/home":
      component = <Home/>;
      break;
    case "/about":
      component = <About/>;
      break;
    case "/contact":
      component = <Contact/>;
      break;
    default:
      component = <Home/>;
      break;
  }

  return (
    <div className="page">
       <NavBar/>
      <div className="component">{component}</div>
      <Footer className="footer-container"/>
    </div>
  );
}
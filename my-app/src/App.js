import * as React from 'react';
import "./App.css"
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NavBar from './NavBar';


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
    <>
       <NavBar/>
      <div>{component}</div>
    </>
  );
}
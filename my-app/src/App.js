import * as React from 'react';

import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NavBar from './NavBar';


export default function DrawerAppBar() {

  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home/>;
      break;
    case "/about":
      component = <About/>;
      break;
    case "/contact":
      component = <Contact/>
  }

  return (
    <>
      <NavBar/>
      <div className>{component}</div>
    </>
  );
}
/* Navigation Bar */
import "./NavBar.css"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from "react";

export default function NavBar (){

  /*
    async function home() {
        window.location.href = `/`;
    }
    async function project() {
        window.location.href = `/project`;
    }
    async function contact() {
        window.location.href = `/contact`;
    }
    */

    const [changeColor, setChangeColor] = useState(false);
    const changeNavColor = () => {
      if (window.scrollY >= 10) {
        setChangeColor(true);
      } else {
        setChangeColor(false);
      } 
    };
    window.addEventListener("scroll", changeNavColor);
    

  return (
    <Box sx={{display: 'flex'}}>
    <CssBaseline/>
      <AppBar sx={changeColor ? {zIndex: "25", padding: "10px", color: "#02a9f7", backgroundColor: "#89d6fb"} : {zIndex: "25", padding: "10px", backgroundColor: "black"}} component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{color:"#02a9f7",fontFamily:"oswald", textAlign: "left", fontSize: 'clamp(14px, 4vw, 40px)', flexGrow: 1, display: { xs: 'true', sm: 'block'} }}
          >
            KEVIN YANG
          </Typography>
          <Box sx={{textAlign: 'right', display: { xs: 'true', sm: 'block' } }}>
            <Button onClick={()=> window.scrollTo({top:0, behavior: "smooth"})} sx={{fontSize: "clamp(14px, 4vw, 30px)",fontFamily: "oswald", color: "#02a9f7"}}>Welcome</Button>
            <Button onClick={()=> window.scrollTo({top:4780, behavior: "smooth"})} sx={{fontSize: "clamp(14px, 4vw, 30px)",fontFamily: "oswald",color: "#02a9f7"}}>Projects/Events</Button>
            <Button onClick={()=> window.scrollTo({top:8800, behavior: "smooth"})} sx={{fontSize: "clamp(14px, 4vw, 30px)",fontFamily: "oswald",color: "#02a9f7"}}>Contact</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
  }
  

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

    async function home() {
        window.location.href = `/`;
    }
    async function project() {
        window.location.href = `/about`;
    }
    async function contact() {
        window.location.href = `/contact`;
    }

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
    <Box sx={{ display: 'flex'}}>
    <CssBaseline/>
      <AppBar sx={changeColor ? {zIndex: "25", padding: "10px", backgroundColor: "#282c34"} : {zIndex: "25", padding: "10px", backgroundColor: "black"}} component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{textAlign: "left", fontSize: '30px', flexGrow: 1, display: { xs: 'none', sm: 'block'} }}
          >
            Kevin Yang
          </Typography>
          <Box sx={{ textAlign: 'right', display: { xs: 'none', sm: 'block' } }}>
            <Button onClick={() => home()} sx={{ color: '#fff' }}>Home</Button>
            <Button onClick={() => project()} sx={{ color: '#fff' }}>Projects/Events</Button>
            <Button onClick={() => contact()} sx={{ color: '#fff' }}>Contact</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
  }
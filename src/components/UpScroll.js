import "./UpScroll.css"
import React from "react";
import { useState } from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { IconButton } from "@mui/material";




export default function UpScroll () {
    const [visible, setVisible] = useState(false);
    const toggleVisible = () => { 
        const scrolled = document.documentElement.scrollTop; 
        if (scrolled > 300){ 
            setVisible(true) 
        }  
        else if (scrolled <= 300){ 
            setVisible(false) 
        } 
    };
    const scrollToTop = () =>{ 
        window.scrollTo({ 
        top: 0,  
        behavior: 'smooth'
        /* you can also use 'auto' behaviour 
         in place of 'smooth' */
        }); 
     };  
window.addEventListener('scroll', toggleVisible);
return ( 
    <div className="button-container">
        <IconButton onClick={scrollToTop} 
        style={{display: visible ? 'inline' : 'none'}}
        >
        <ArrowUpwardIcon sx={{fontSize: '3vw', color: '#02a9f7'}}/>
        </IconButton>
    </div>
  );
}
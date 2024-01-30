/* contact page */
import "./Contact.css"
import "@fontsource/oswald"

import { Link } from "@mui/material";

import Divider from "@mui/material/Divider";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Box from "@mui/material/Box";

export default function Contact (){

    return(
    <div style={{paddingTop: "90px",backgroundColor: "black"}}>
        <div className="c-body">
            
            
            <div className="c-title">Get In Touch</div>

            <Box className='c-items'>

                <div className="c-icon">
                    <PhoneIcon sx={{fontSize:'90px', color: 'white'}}/>
                    Phone # 678-900-3354
                </div> 
                <Divider orientation="vertical" flexItem/>
                <div className="c-icon">
                    <EmailIcon sx={{fontSize:'90px'}}/>
                    Email: Kyang504@gmail.com
                </div>
                <Divider orientation="vertical" flexItem/>

                <div className="c-icon">
                    <LinkedInIcon sx={{fontSize:'90px'}}/>
                    <Link target="_blank" href="https://www.linkedin.com/in/kevin-yang-449611238/">LinkedIn</Link>
                </div>
            </Box>
            
        </div>
    </div>
    );

}
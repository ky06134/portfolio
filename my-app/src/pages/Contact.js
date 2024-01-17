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
        <div className="body">
            
            <div className="title">Get In Touch</div>

            <Box className='items'>

                <div className="icon">
                    <PhoneIcon sx={{fontSize:'90px', color: 'white'}}/>
                    Phone # 678-900-3354
                </div> 
                <Divider orientation="vertical" flexItem/>
                <div className="icon">
                    <EmailIcon sx={{fontSize:'90px'}}/>
                    Email: Kyang504@gmail.com
                </div>
                <Divider orientation="vertical" flexItem/>

                <div className="icon">
                    <LinkedInIcon sx={{fontSize:'90px'}}/>
                    <Link href="https://www.linkedin.com/in/kevin-yang-449611238/">LinkedIn</Link>
                </div>
            </Box>
            
        </div>
    );

}
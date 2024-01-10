/* contact page */
import "./Contact.css"

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Contact (){
    return(
        <div style={{padding: '100px'}}>
            <div className="title">Get In Touch</div>

            <div className='items'>

                <div className="icon">
                    <PhoneIcon sx={{fontSize:'80px'}}/>
                    Phone # 678-900-3354
                </div> 
                <div className="icon">
                    <EmailIcon sx={{fontSize:'80px'}}/>
                    Email: Kyang504@gmail.com
                </div>
                <div className="icon">
                    <LinkedInIcon sx={{fontSize:'80px'}}/>
                    Email: Kyang504@gmail.com
                </div>
                
            </div>
            
        </div>
    );

}
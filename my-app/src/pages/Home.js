/* Home page */
import "./Home.css"
import UpScroll from "../components/UpScroll";
import Divider from "@mui/material/Divider";

export default function Home (){
    return(
        <div className= "fontstyle">
        <div style={{paddingTop: "90px",backgroundColor: "black"}}></div>
        <div className="split">
            <div className ="left-pane">
                <div className="pane-profile-image" >
                </div>
            </div>
                <div className="right-pane">
                    <div className="h-title">Welcome To My Website</div>
                    <div className="pane-text" style={{color: 'white'}}>
                    Thank You for taking the time to checkout my Bio. My Name is Kevin Yang. 
                    I am a Computer Science Major at the University of Georgia. 
                    As a Senior at UGA, I am currently looking for a full Time job. Below are some information about my Career goals, Education, and Skills.</div>
                </div>
        </div>
        <UpScroll/>
        <Divider orientation="horizontal" sx= {{backgroundColor: "#89d6fb"}} flexItem/>

        <div style={{ position: "sticky", top: '70px', display: "flex", flexDirection: "row", alignContent: 'center', alignItems: 'center', backgroundColor: "#89d6fb"}}>
            <button 
            className="nav-button"
            onClick={()=> window.scrollTo({top:900, behavior: "smooth"})}
            >
            Career Goals
            </button>
            <button 
            className="nav-button"
            onClick={()=> window.scrollTo({top:1700, behavior: "smooth"})}
            >Skills
            </button>
            <button 
            className="nav-button"
            onClick={()=> window.scrollTo({top:2750, behavior: "smooth"})}
            >Education</button>
            <button 
            className="nav-button"
            onClick={()=> window.scrollTo({top:3790, behavior: "smooth"})}
            >Work Experience</button>
        </div>

        <div className="career-bio">
            <div className="h-title">CAREER GOALS</div>
             

            <div className="text-body"> Since I was a teenager, I was fascinated by the amazing things technology has made possible. 
            In all fields, we find the distribution of media, such as image, sounds, and text. 
            Even my 80 year old grandparents who has never used the internet in the past, has now learned to surf the web for videos to watch. 
            What makes it possible for everyone to easily access these media's is a well designed UI. 
            My passion for computer science stems from desire to help others and create an amazing user experience.
            That is why, during my stay at the University of Georgia, I focused my attention to Computer Science. 
            As I learned the basics of coding from ground up, I eventually learned to code a website and work with databases. 
            During my journey, I found a passion for Software development. I loved creating Websites, Apps and learning new tech.
            </div>

            <div className="text-body">
                <p>Below are some of the positions I am currently looking for:</p>
                <p>- Front-End Engineer</p>
                <p>- Front-End Developer</p>
                <p>- Web Developer</p>
                <p>- Software Engineer</p>
                <p>- Mobile Developer</p>

            </div>

        </div>
        <Divider orientation="horizontal" sx= {{backgroundColor: "#89d6fb"}} flexItem/>
        <div className="skills-bio">
            <div className="h-title" style={{color: 'white'}}>SKILLS</div>
            <div className= "split">
                <div className="left-box">
                    <div className="text-body" style={{backgroundColor: "#89d6fb"}}>
                        <p>Web Development Languages:</p>
                        <p>- JavaScript (4+ years)</p>
                        <p>- Html (4+ years)</p>
                        <p>- ReactJS (4+ years)</p>
                        <p>- CSS (4+ years)</p>
                    </div>
                </div>
                <div className="right-box">
                    <div className="text-body" style={{backgroundColor: "#89d6fb"}}>
                        <p>Programming languages:</p>
                        <p>- Java (3+ years)</p>
                        <p>- C++ (4+ years)  </p>
                        <p>- C (2+ years)</p>
                        <p>- Python (1+ years) </p>
                    </div>
                </div>
            </div>
            <div className="split">
                <div className="left-box">
                    <div className="text-body" style={{backgroundColor: "#89d6fb"}}>
                        <p>Programming Tools / Librarys:</p>
                        <p>- Framer Motion</p>
                        <p>- Visual Studio Code</p>
                        <p>- Eclipse</p>
                        <p>- Material UI</p>
                        <p>- GitHub</p>
                        <p>- Axios</p>
                    </div>
                </div>
                <div className="right-box">
                    <div className="text-body" style={{backgroundColor: "#89d6fb"}}>
                        <p>Spoken languages:</p>
                        <p>- English (read, write, speak)</p>
                        <p>- Chinese (speak)</p>
                    </div>
                </div>
            </div>
        </div>

        <Divider orientation="horizontal" sx= {{backgroundColor: "#89d6fb"}} flexItem/>

        <div className="education-bio">
            <div className="h-title">EDUCATION</div>
            <div className="split" style={{ margin: '30px', backgroundColor: "#89d6fb"}}>
                <div className="uga-education"/>
                  <div className="right-education">
                    <div className="text-body">
                        <p style={{fontSize: "25px"}}>University of Georgia</p>
                        <p>Bachelor Degree in Computer Science</p>
                        <p>GPA: 3.4</p>
                        <p style={{color: 'black'}}>August 2020 - Current</p>
                        <p>Activities and Societies: UGA ACM, OpenSource, UGA HACKS</p>
                    </div>  
                </div>
                
            </div>
            <div className="split" style={{ margin: '30px', backgroundColor: "#89d6fb"}}>
                <div className="luella-education"/>
                  <div className="right-education">  
                    <div className="text-body">
                        <p style={{fontSize: "25px"}}>Luella High School</p>
                        <p>High School diploma</p>
                        <p>GPA: 4.0 unweighted</p>
                        <p style={{color: 'black'}}>August 2016 - May 2020</p>
                        <p>Activities and Societies: Steam, Beta club, Nation Honors Science Society, Band, Tennis, Math team, Robotics</p>
                    </div>
                </div>
                
            </div>
        </div>

        <Divider orientation="horizontal" sx= {{backgroundColor: "#89d6fb"}} flexItem/>

        <div className="work-bio">
            <div className="h-title">Work Experience</div>
            <div className="split" style={{ margin: '30px', backgroundColor: "#89d6fb"}}>
                <div className="fish"/>
                  <div className="right-work">
                    <div className="text-body">
                        <p style={{fontSize: "25px"}}>138 Fish Market</p>
                        <p>Position: General Manager</p>
                        <p style={{color: 'black'}}>2010 - 2020</p>
                        <p>Description: Worked on hiring and teaching new employees, while also working the Cash register, preparing seafood and checking shipments</p>
                    </div>  
                </div>
                
            </div>
            <div className="split" style={{ margin: '30px', backgroundColor: "#89d6fb"}}>
                <div className="canes"/>
                  <div className="right-work"> 
                    <div className="text-body">
                        <p style={{fontSize: "25px"}}>Raising Cane's</p>
                        <p>Position: Part Time: Drive Thru</p>
                        <p style={{color: 'black'}}>Jan 2024 - current</p>
                        <p>Description: Worked the Cash register and took peoples orders</p>
                    </div> 
                </div>
                
            </div>
        </div>

        
        </div>
    );

}
/* Home page */
import "./Home.css"
import UpScroll from "../components/UpScroll";
import Divider from "@mui/material/Divider";

export default function Home (){
    return(
        <div>
        <div style={{paddingTop: "90px",backgroundColor: "black"}}>
            <div className="h-title">Welcome To My Website</div>
            <div className="profile-picture"/>
            <div className="pane-text" style={{color: 'white'}}>
            My Name is Kevin Yang. 
            I am a Computer Science Major at the University of Georgia. 
            As a Graduate at UGA with a Bachelor in Computer Science, 
            I am currently looking for a full time job. Below are some information about my Career Goals, Projects, Education, and Skills.
            </div>
        </div>
        <UpScroll/>
        <Divider orientation="horizontal" sx= {{backgroundColor: "#89d6fb"}} flexItem/>

        

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
        <div className="skills-bio">
            <div className="h-title" style={{color: 'white'}}>SKILLS</div>

                <div className="text-body" style={{backgroundColor: "#d4f0fc"}}>
                    <p>Web Development Languages:</p>
                    <p>- JavaScript (4+ years)</p>
                    <p>- Html (4+ years)</p>
                    <p>- ReactJS (4+ years)</p>
                    <p>- CSS (4+ years)</p>
                </div>

                <div className="text-body" style={{backgroundColor: "#d4f0fc"}}>
                    <p>Programming languages:</p>
                    <p>- Java (3+ years)</p>
                    <p>- C++ (4+ years)  </p>
                    <p>- C (2+ years)</p>
                    <p>- Python (1+ years) </p>
                </div>

                <div className="text-body" style={{backgroundColor: "#d4f0fc"}}>
                    <p>Programming Tools / Librarys:</p>
                    <p>- Framer Motion</p>
                    <p>- Visual Studio Code</p>
                    <p>- Eclipse</p>
                    <p>- Material UI</p>
                    <p>- GitHub</p>
                    <p>- Axios</p>
                </div>

                <div className="text-body" style={{backgroundColor: "#d4f0fc"}}>
                    <p>Spoken languages:</p>
                    <p>- English (read, write, speak)</p>
                    <p>- Chinese (speak)</p>
                </div>
        </div>

        <div className="education-bio">
            <div className="h-title">EDUCATION</div>

            <div className="box" style={{ marginBottom: '2vw', backgroundColor: "#d4f0fc"}}>
                <div style={{padding: "1vw", alignItems: 'center', display: 'flex', flexDirection: 'row'}}>
                    <div className="uga-education"/>
                    <p className="sub-title">University of Georgia</p>
                </div>
                
                <div style={{paddingLeft: '3vw', color: 'black'}}>
                    <p>Bachelor Degree in Computer Science</p>
                    <p>GPA: 3.4</p>
                    <p style={{color: 'black'}}>August 2020 - Current</p>
                    <p>Activities and Societies: UGA ACM, OpenSource, UGA HACKS</p>
                    <p>Relavant Clases </p>
                </div>
            </div>

            <div className="box" style={{ marginBottom: '2vw', backgroundColor: "#d4f0fc"}}>
                <div style={{padding: "1vw", alignItems: 'center', display: 'flex', flexDirection: 'row'}}>
                    <div className="luella-education"/>
                    <p className="sub-title">Luella High School</p>
                </div>

                <div style={{paddingLeft: '3vw', color: 'black'}}>
                    <p>High School diploma</p>
                    <p>GPA: 4.0 unweighted</p>
                    <p style={{color: 'black'}}>August 2016 - May 2020</p>
                    <p>Activities and Societies: Steam, Beta club, Nation Honors Science Society, Band, Tennis, Math team, Robotics</p>
                </div>
            </div>
        </div>
        <div className="work-bio">
            <div className="h-title">Work Experience</div>

            <div className="box" style={{ marginBottom: '2vw', backgroundColor: "#d4f0fc"}}>
                <div style={{padding: "1vw", alignItems: 'center', display: 'flex', flexDirection: 'row'}}>
                    <div className="fish"/>
                    <p className="sub-title">138 Fish Market</p> 
                </div>

                <div style={{paddingLeft: '2vw', color: 'black'}}>
                    <p>Position: General Manager</p>
                    <p style={{color: 'black'}}>2010 - 2020</p>
                    <p>Description: Worked on hiring and teaching new employees, while also working the Cash register, preparing seafood and checking shipments</p>
                    <p>Skills: Delegation, Team Building, Communication, Problem Solving, Time Management, Strategic Planning</p>
                </div>
            </div>
            <div className="box" style={{ marginBottom: '2vw', backgroundColor: "#d4f0fc"}}>
                <div style={{padding: "1vw", alignItems: 'center', display: 'flex', flexDirection: 'row'}}>
                    <div className="canes"/>
                    <p className="sub-title">Raising Cane's</p>
                </div>

                <div style={{paddingLeft: '2vw', color: 'black'}}>
                    <p>Position: Part Time: Drive Thru</p>
                    <p style={{color: 'black'}}>01/2024 - 03/2024</p>
                    <p>Description: Worked the Cash register and took peoples orders</p>
                    <p>Skills: Collaboration, Communication, Time Management</p>
                </div>
            </div>
        </div>
        </div>
    );

}
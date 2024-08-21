/* project page */
import "./Project.css"
import { Divider } from "@mui/material";
import YoutubeEmbed from "../components/YoutubeEmbed";


export default function Project (){
    return(
        <div className="p-body">
            <div className="city-image">Projects/Events</div> 
            <div className="p-title">
            </div>
            
            <div className="p-title" style={{paddingLeft:"20px", color: 'white', paddingBottom: '20px'}}>Below are some of my favorite Projects</div>

            <div className="p-container">
                <Divider orientation="horizontal" sx= {{ backgroundColor: "#89d6fb"}} flexItem/>
                <div className="p-title">ABC: Athens Booking Company</div>
                <div className="p-text">
                    <p>Date: Fall 2023</p>
                    <p>Tools: ReactJS, MaterialUI, Axios, MySQL</p>
                    <p>During the Fall semester of 2023 at the University of Georgia, I took Software Engineering. 
                        During which, we were assigned a project to create a movie booking website.
                    </p>
                    <p>The movie booking website includes options to create users, both admins and customers. 
                        Admins are able to add and schedule movies, as well as add promotions and manage users.
                         While customers can manage profile, recieve promotions and book movies.
                    </p>
                    <YoutubeEmbed embedId="bjo-rn8R_4k" />

                    <p>A total of 3 people worked on the project and was developed using an Scrum Framework. We wrote user stories to make sure we had 
                        down all the important functions that a movie booking website needed. My role was to create the front end of the entire project.
                         One helpful tool was MaterialUI was the prebuilt components made the project pretty easy to implement.</p>           
                </div>
            </div>

            <div className="p-container">
                <Divider orientation="horizontal" sx= {{ backgroundColor: "#89d6fb"}} flexItem/>
                <div className="project-image-hack8"/>
                <div className="p-text">
                    <p style={{fontSize: '25px'}}>TappedIn</p>
                    <p>Date: Feb 2023</p>
                    <p>Tools: Java, React Native, MongoDB</p>
                    <p>Around Feburary of 2023, me and a team of friends joined the UGA Hackathon8. 
                   In the event we submitted our own project called TappedIn and competed for best project using MongoDB database. In return of our teams efforts, we were able to win first place in the event!
                    </p>
                    <p>TappedIn was a mobile app created in 3 days that aimed to help become a plateform where users can posts their 
                    own events for the community around them to see. Others users can opt to join the event or post there own events.
                    </p>
                 
                    <YoutubeEmbed embedId="Ljz048jijoA" />

                    

                    <p>As a team project, my role was to create a clean and appealing front-end. We decided to use React Native as many of our members are familiar
                        with it. The 3 days spent working on this was not smooth as I often met bugs that conflicted with how I envisioned the app to look.  
                        Overall the project was a very fun experience and gave me more experience on working with React Native and MongoDB.
                    </p>           
                </div>
            </div>

            <div className="p-container">
                <Divider orientation="horizontal" sx= {{ backgroundColor: "#89d6fb"}} flexItem/>
                
                <div className="p-title">
                    <p>ACM OPEN SOURCE PROJECT: UGA Marketplace </p> 
                </div>
                <div className="project-image-ugamarket"/>
                    <p style={{fontSize:'clamp(15px, 3vw, 25px'}}>Date: Feb 2023</p>
                <div className="p-text">

                    <p>Tools: ReactJS, PSQL, Docker </p>
                    
                    <p>Around Spring of 2023, I joined an Open Source Project the UGA ACM Open Source Team was Working on. 
                        The project was to create a Website that will host a marketplace that UGA students would use to sell items or services.
                    </p>

                    <p> As a project worked on by many people, 
                        my role was to help think of important pages to add on the website and implement them. One page I worked on was the Home page 
                        where I created containers to help format certain buttons and images.
                    </p>

                    <p>
                        Working on this project, I gained experience working on a project in a large group over a month.
                         In addtion, I gained more experience working with reactjs. 
                    </p>
                    
                    <p> Project Link: 
                        <a href= "https://uga-marketplace.fly.dev/"> https://uga-marketplace.fly.dev/</a>
                    </p>

                    <p> GitHub Repository: 
                        <a href= "https://github.com/acm-uga/openSourceSpring23"> https://github.com/acm-uga/openSourceSpring23</a>
                    </p>
                     
                </div>
                <Divider orientation="horizontal" sx= {{backgroundColor: "#89d6fb"}} flexItem/>
            </div>
            
        </div>
    );

}
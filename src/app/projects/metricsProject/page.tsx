import MediaCarousel from "@/app/ui/mediaCarousel";
import Tools from "@/app/ui/tools";

export default function MetricsProject() {

  const tools = ["react", "git", "github", "mui", "Figma", 'gitlab']

  const media = [
    {
      id: 1,
      type: 'image' as const,
      src: "/MetricsPhoto.png",
    },
  ];

  return (
    <div className="mb-15 md:mb-40">
      <div className="flex flex-col items-center justify-center bg-blue-50 md:px-20 p-5 md:py-20 py-10">
        <div className="font-bold md:text-4xl md:pb-5 pb-1 text-black text-2xl">Metrics Project</div>
        <div className="text-black md:text-xl text-sm text-center">Built to display important metrics on the software development process of teams at the Robins AFB</div>
      </div>
      <MediaCarousel media={media} />
      <div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          What it does
        </div>
        <div className="px-5 lg:mx-40">During my time at Robins Air Force Base, I was part of a team responsible for developing a comprehensive Metrics Dashboard — a web application designed to organize and visualize key data related to software development across multiple teams. The platform provides interactive graphs displaying the number of tickets and story points completed during each sprint cycle, broken down by team. One of its core features is secure access control: users must log in, and the data shown is tailored to their role or clearance level. Additionally, users with elevated permissions can edit or correct data to address discrepancies.
 </div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          Role
        </div>
        <div className="px-5 lg:mx-40">In this project, I worked as a Full Stack Engineer, contributing to both the frontend and backend development of the application. On the frontend, I helped design and implement the layout for each page, including modals and reusable UI components such as buttons, loading screens, and typography, while also collaborating on the overall visual theme using Material UI. On the backend, I was responsible for creating new API endpoints, designing and integrating new database tables, and writing clear, developer-friendly API documentation. Throughout the project, I actively participated in daily standup meetings and sprint planning sessions, working closely with my team to break down tasks into tickets and keep our sprint board organized and up to date.</div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          Accomplishments
        </div>
        <div className="px-5 lg:mx-40">The website was successfully deployed and is now used by numerous employees at Robins AFB. This project gave me hands-on experience with large-scale software systems and working with complex, high-volume databases. I also became proficient in tools like GitLab, Material UI, and several other development technologies.</div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          Challenges
        </div>
        <div className="px-5 lg:mx-40">Initially, working on such a large codebase was overwhelming — thousands of lines of code required careful navigation, debugging, and documentation. I had to quickly learn how to read and understand unfamiliar code written by other team members, maintain high-quality documentation, and thoroughly test new features and bug fixes. Over time, I adapted, significantly improving my ability to analyze and contribute to large collaborative projects.</div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          Tools Used
        </div>
        <div className="flex flex-row items-center px-5 lg:mx-40">
          <Tools strings={tools} />
        </div>
      </div>
    </div>
  );
}
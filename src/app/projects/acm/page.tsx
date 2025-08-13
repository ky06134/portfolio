import MediaCarousel from "@/app/ui/mediaCarousel";
import Tools from "@/app/ui/tools";

export default function Hack8() {

  const tools = ["react", "git", "github",]

  const media = [
    {
      id: 1,
      type: 'image' as const,
      src: 'marketplace.png',
    },
  ];

  return (
    <div className="mb-15 md:mb-40">
      <div className="flex flex-col items-center justify-center bg-red-50 md:px-20 p-5 md:py-20 py-10">
        <div className="font-bold md:text-4xl md:pb-5 pb-1 text-black text-2xl">ACM Club Project: UGA Marketplace</div>
        <div className="text-black md:text-xl text-sm text-center"> Online marketplace for around the UGA Campus </div>
      </div>
      <MediaCarousel media={media} />
      <div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          What it does
        </div>
        <div className="px-5 lg:mx-40">UGA Marketplace is a student-focused web platform created during the Spring 2023 ACM Open Source Program. Developed exclusively for University of Georgia (UGA) students, the platform features a hub for buying and selling goods, finding housing, and coordinating course swaps. Access is restricted via @uga.edu email, enhancing security and community trust</div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          Role
        </div>
        <div className="px-5 lg:mx-40">In this project, I contributed as a full-stack developer with a focus on building and refining features across both the frontend and backend. I participated in the development of React-based user interfaces and helped integrate backend services that support core platform functions. Working within a collaborative team environment, I followed version-controlled workflows on GitHub and participated in weekly planning and development sessions. My work involved interpreting design requirements, implementing new features, and helping troubleshoot issues across the application.</div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          Accomplishments
        </div>
        <div className="px-5 lg:mx-40">One of the most significant achievements of the project was launching the web platform that met the real-world needs of UGA students. I contributed to multiple modules, including the Marketplace (where students could buy and sell textbooks, dorm supplies, and more), the Student Housing feature (providing sublease listings and housing recommendations), and the Course Swap system (which allowed students to trade class sections when seats were full). The project achieved over 300 commits and was collaboratively developed by multiple contributors, showcasing strong teamwork and consistent progress.</div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          Challenges
        </div>
        <div className="px-5 lg:mx-40">One of the major challenges we encountered was implementing secure and reliable access control to ensure that only @uga.edu email holders could register and access the platform. This required careful attention to validation logic and security practices. Another challenge was managing the scope of the project—feature requests and evolving priorities required the team to stay agile while maintaining a clear development path. We also had to coordinate work across multiple modules, making integration between the React frontend and the backend services complex at times. Ensuring consistency in code quality and managing merge conflicts in a team setting tested our collaborative and technical skills.</div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          Tools Used
        </div>
        <div className="flex flex-row items-center px-5 lg:mx-40">
          <Tools strings={tools} />
        </div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          Resources
        </div>
        <ul className="px-10 lg:mx-40 hover:text-blue-400 list-disc">
          <li>
            <a href="https://github.com/ky06134/openSourceSpring23" target="_blank">GitHub Repo</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
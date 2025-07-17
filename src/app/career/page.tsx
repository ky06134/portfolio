import { Icon } from "lucide-react";
import { Timeline } from "../ui/timeline";
import { IconPoint, IconArrowRight } from "@tabler/icons-react";


export default function CareerPage() {

  const data = [
    {
      title: "2025",
      content: (
        <div>
          <p className="mb-8 font-bold text-2xl text-neutral-800">
            Started freelance work with Sssync
          </p>
          <div className="grid grid-cols-2 gap-4 pb-5">
            <img
              src="sssyncLanding.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="sssyncCore.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
          <p className="font-bold pb-5 "><a className="hover:text-blue-400 text-sm flex direction-row" href="https://www.sssync.app/" target="_blank">App Landing Page <IconArrowRight /></a></p>
          <p className="font-bold pb-5">Position: Project Manager, Frontend Developer</p>
          <p className="font-bold pb-5">Sssync is thefirst free lance work I have done. As a part of the team, my job is to:</p>
          <ul className="pl-5 list-disc list-outside text-gray-800">
            <li className="pb-2">Worked with a small team to develop a secure and efficient app through an agile development process. This included bi-weekly sprint planning and monthly meetings with investors </li>
            <li className="pb-2">Created/manage project board to facilitate workload through linear</li>
            <li className="pb-2">Designed and develop frontend UI through React </li>
          </ul>
          <p className="pt-2">Tools: React, Github, Linear</p>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div >
          <div className="pb-25">
            <p className="mb-8 font-bold text-2xl text-neutral-800">
              Started Full-time Job at Robins AFB
            </p>
            <div className="grid grid-cols-2 gap-4 pb-5">
              <img
                src="RobinsSign.jpg"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <img
                src="AFBactivity.jpg"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <img
                src="metricsPhoto.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <img
                src="afbsoftware.jpg"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </div>
            <p className="font-bold pb-5 "><a className="hover:text-blue-400 text-sm flex direction-row" href="https://www.linkedin.com/company/402sweg/posts/?feedView=all" target="_blank">Company Linkedin Page <IconArrowRight /></a></p>
            <p className="font-bold pb-5">Position: Computer Scientist</p>
            <p className="font-bold pb-5">Worked as a part of the 402d Software Engineering group at the Robins AFB. My job includes:</p>
            <ul className="pl-5 list-disc list-outside text-gray-800">
              <li className="pb-2">Worked with a large team to develop secure and efficient websites through an agile development process. This included daily standup meetings, bi-weekly sprint planning, and monthly board meetings</li>
              <li className="pb-2">Worked with ReactJS to create the UI of the website. This includes creating reusable components and designing websites through Figma. </li>
              <li className="pb-2">Worked with different libraries such as MUI to create UI that looks uniform and clean</li>
              <li className="pb-2">Created API endpoints through Flask and documented them into an Document</li>
              <li className="pb-2">Tested code locally using docker and postman</li>
              <li className="pb-2">Mentored interns on tech stack, agile process and best coding practices</li>
              <li className="pb-2 font-bold">*Obtained Security Clearance</li>
            </ul>
            <p className="pt-2">Tools: React, Material UI, Python, Docker, CSS, Flask, Git, Jira, GitLab, Azure DevOps</p>
            <p className="pt-2">Certificates Earned: <a className="hover:text-blue-400 text-sm flex direction-row" href="https://www.comptia.org/en-us/certifications/security/" target="_blank">CompTIA Security+</a></p>
          </div>
          <div className="pb-25">
            <p className="mb-8 font-bold text-2xl text-neutral-800">
              Graduated from the University of Georgia with a Bachelors Degree in Computer Science
            </p>
            <div className="grid grid-cols-2 gap-4 pb-5">
              <img
                src="ArchShot-15-opti.jpg"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <img
                src="uga.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </div>
            <p className="font-bold pb-5 "><a className="hover:text-blue-400 text-sm flex direction-row" href="https://computing.uga.edu/" target="_blank">More details on UGA: College of Computing <IconArrowRight /></a></p>
            <p className="font-bold pb-5">Degree: Bachelors in Computer Science</p>
            <p className="font-bold pb-5">Attended the University of Georgia for 4 years to earn my Bachelors. Important classes:</p>
            <ul className="pl-5 list-disc list-outside text-gray-800">
              <li className="pb-2">Software Engineering (CSCI 4050)</li>
              <li className="pb-2">Computer Architecture (CSCI 4720)</li>
              <li className="pb-2">Computer Networks (CSCI 4760)</li>
              <li className="pb-2">DataBase Management (CSCI 4370)</li>
              <li className="pb-2">Cloud Computing (CSCI 4795)</li>
              <li className="pb-2">Algorithms (CSCI 4470)</li>
              <li className="pb-2">Distributed Computing Systems (CSCI 4780)</li>
              <li className="pb-2">Computer Graphics (CSCI 4810)</li>
              <li className="pb-2">Data Structures (CSCI 2720)</li>
            </ul>
            <p className="pt-2">Certificates Earned: <a className="hover:text-blue-400 text-sm flex direction-row" href="https://csci.franklin.uga.edu/certificate-applied-data-science" target="_blank">Certificate of Applied Data Science</a></p>
          </div>
          <div>
            <p className="mb-8 font-bold text-2xl text-neutral-800">
              Attended UGA Hacks 9
            </p>

            <div className="grid grid-cols-2 gap-4 pb-5">
              <img
                src="hack9.png"
                alt="hero template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <img
                src="http://img.youtube.com/vi/kbBP9e5OI5o/maxresdefault.jpg"
                alt="feature template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </div>
            <p className="font-bold pb-5 "><a className="hover:text-blue-400 text-sm flex direction-row" href="https://9.ugahacks.com/" target="_blank">Details on UGA Hacks 9 <IconArrowRight /></a></p>
            <p className="font-bold pb-5">Degree: Bachelors in Computer Science</p>
            <p className="font-bold pb-5">Attended the University of Georgia for 4 years to earn my Bachelors. Important classes:</p>
            <ul className="pl-5 list-disc list-outside text-gray-800">
              <li className="pb-2">Software Engineering (CSCI 4050)</li>
              <li className="pb-2">Computer Architecture (CSCI 4720)</li>
              <li className="pb-2">Computer Networks (CSCI 4760)</li>
              <li className="pb-2">DataBase Management (CSCI 4370)</li>
              <li className="pb-2">Cloud Computing (CSCI 4795)</li>
              <li className="pb-2">Algorithms (CSCI 4470)</li>
              <li className="pb-2">Distributed Computing Systems (CSCI 4780)</li>
              <li className="pb-2">Computer Graphics (CSCI 4810)</li>
              <li className="pb-2">Data Structures (CSCI 2720)</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="mb-8 font-bold text-2xl text-neutral-800">
            Attended UGA Hacks 8
          </p>

          <div className="grid grid-cols-2 gap-4 pb-5">
            <img
              src="hack8.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="hack8winner.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
          <p className="font-bold pb-5 "><a className="hover:text-blue-400 text-sm flex direction-row" href="https://8.ugahacks.com/" target="_blank">Details on UGA Hacks 8 <IconArrowRight /></a></p>
          <p className="font-bold pb-5">Degree: Bachelors in Computer Science</p>
          <p className="font-bold pb-5">Attended the University of Georgia for 4 years to earn my Bachelors. Important classes:</p>
          <ul className="pl-5 list-disc list-outside text-gray-800">
            <li className="pb-2">Software Engineering (CSCI 4050)</li>
            <li className="pb-2">Computer Architecture (CSCI 4720)</li>
            <li className="pb-2">Computer Networks (CSCI 4760)</li>
            <li className="pb-2">DataBase Management (CSCI 4370)</li>
            <li className="pb-2">Cloud Computing (CSCI 4795)</li>
            <li className="pb-2">Algorithms (CSCI 4470)</li>
            <li className="pb-2">Distributed Computing Systems (CSCI 4780)</li>
            <li className="pb-2">Computer Graphics (CSCI 4810)</li>
            <li className="pb-2">Data Structures (CSCI 2720)</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="mb-8 font-bold text-2xl text-neutral-800">
            Attended UGA Hacks 7
          </p>

          <div className="grid grid-cols-2 gap-4 pb-5">
            <img
              src="hack7.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="hack7project.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
          <p className="font-bold pb-5 "><a className="hover:text-blue-400 text-sm flex direction-row" href="https://7.ugahacks.com/" target="_blank">Details on UGA Hacks 7 <IconArrowRight /></a></p>
          <p className="font-bold pb-5">Team: Kevin Yang, Ethan Pham</p>
          <div className="flex dirction-row pb-5">
            <p className="font-bold pr-2">DevPost Submission: </p>
            <a className="hover:text-blue-400 flex direction-row" href="https://devpost.com/software/run-the-world-2v8wcr" target="_blank">Run The World</a>
          </div>

          <p className="pb-5">UGA Hack 7 is the first Hackathon I attended. Me and a friend decided to make a game called "RUN THE WORLD" to simulate how hard it is to balance the society, environment and economy.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="mb-30">
      <Timeline data={data} />
    </div>
  );
}
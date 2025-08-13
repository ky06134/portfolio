"use client";


import MediaCarousel from "@/app/ui/mediaCarousel";
import Tools from "@/app/ui/tools";

export default function Hack8() {

  const tools = ["react", "git", "github", "mongoDB"]

  const media = [
    {
      id: 1,
      type: 'youtube' as const,
      src: 'https://www.youtube.com/embed/Ljz048jijoA',
    },
    {
      id: 2,
      type: 'image' as const,
      src: "/portfolio/hack8winner.png",
    },
  ];

  return (
    <div className="mb-15 md:mb-40">
      <div className="flex flex-col items-center justify-center bg-cyan-50 md:px-20 p-5 md:py-20 py-10">
        <div className="font-bold md:text-4xl md:pb-5 pb-1 text-black text-2xl">TappedIn</div>
        <div className="text-black md:text-xl text-sm text-center">A social event app that lets users post and join local activities, built with React Native and MongoDB.</div>
      </div>
      <MediaCarousel media={media} />
      <div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          What it does
        </div>
        <div className="px-5 lg:mx-40">This mobile app connects users through local event coordination. Users can create posts for activities they’re attending or hosting—like studying, playing sports, or going out—and others nearby can view and join these events. Posts are organized by interest tags (e.g., fitness, gaming, food), making it easy to filter and find relevant events. The goal is to encourage in-person connections and make social discovery more accessible on and around university campuses.</div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          Role
        </div>
        <div className="px-5 lg:mx-40">I focused primarily on frontend development using React Native. My responsibilities included designing and building UI components such as event cards, tags, and the home feed layout. I worked on formatting elements for different screen sizes, ensuring a clean and responsive interface, and integrating dynamic data into the user interface. I also used Expo Go to test and debug the app in real-time throughout development, and collaborated closely with teammates to align design decisions and user flow.</div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          Accomplishments
        </div>
        <div className="px-5 lg:mx-40">Despite being new to many of the tools we used, our team successfully built and deployed a functional mobile app within a short development window. We were able to connect the frontend to a live database, allowing users to create, store, and view real-time event data—all queried dynamically from MongoDB. Most notably, our project won first place in the category for Best Use of MongoDB, which was a rewarding validation of our effort to learn and apply new technologies effectively.</div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          Challenges
        </div>
        <div className="px-5 lg:mx-40">The biggest challenge we faced was working with tools and technologies that were new to most of the team. MongoDB and backend networking concepts proved especially difficult when trying to connect frontend components with the backend API. In addition, limited experience with React Native led to formatting and component integration issues. Learning and troubleshooting these problems in real time tested our problem-solving skills and collaboration</div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          Tools Used
        </div>
        <div className="flex flex-row items-center px-5 lg:mx-40">
          <Tools strings={tools} />
        </div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          Resources
        </div>
        <ul className="px-10 lg:mx-40  list-disc">
          <li className="hover:text-blue-400">
            <a href="https://devpost.com/software/tappedin" target="_blank">DevPost Link</a>
          </li>
          <li className="hover:text-blue-400">
            <a href="https://github.com/hoangnguyen2021/UGAHacks-Tapped-In" target="_blank">GitHub Repo</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
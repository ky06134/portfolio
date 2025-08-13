import MediaCarousel from "@/app/ui/mediaCarousel";
import Tools from "@/app/ui/tools";

export default function Hack9() {

  const tools = ["html","javascript", "adobeSDK", "git",]

  const media = [
    {
      id: 1,
      type: 'youtube' as const,
      src: 'https://www.youtube.com/embed/kbBP9e5OI5o',
    },
    {
      id: 2,
      type: 'image' as const,
      src: "hack9.png",
    },
  ];

  return (
    <div className="mb-15 md:mb-40">
      <div className="flex flex-col items-center justify-center bg-yellow-50 md:px-20 p-5 md:py-20 py-10">
        <div className="font-bold md:text-4xl md:pb-5 pb-1 text-black text-2xl">OpenMoji</div>
        <div className="text-black md:text-xl text-sm text-center">A custom Adobe Express add-on that provides users with a free library of emojis for their creative projects. Built with HTML and JavaScript, it allows users to drag, resize, and place emojis directly into their designs.</div>
      </div>
      <MediaCarousel media={media} />
      <div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          What it does
        </div>
        <div className="px-5 lg:mx-40">OpenMoji is an Adobe Express add-on that provides users with a free, customizable library of emojis. These emojis can be added directly into Adobe Express projects, allowing users to scale, reposition, and integrate them creatively within their designs. The add-on fills a gap in the existing Adobe Express add-on ecosystem by offering a unique collection of emojis, making it easier for users to enhance their visual content with expressive elements.</div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          Role
        </div>
        <div className="px-5 lg:mx-40">I developed OpenMoji independently, taking on the role of a solo developer and designer. I was responsible for ideating, coding, and testing the add-on from scratch. With no prior experience in JavaScript or Adobe Express development, I committed to a rapid learning process. My tasks included building the user interface using HTML and JavaScript, integrating the emoji library, and ensuring the add-on worked seamlessly within the Adobe Express environment through their local development tools.</div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          Accomplishments
        </div>
        <div className="px-5 lg:mx-40">One of my proudest accomplishments was successfully building a functional Adobe Express add-on without prior experience in JavaScript. Within just two days, I was able to turn an idea into a working prototype using newly acquired skills. Creating something completely on my own — from design to implementation — showed me what I’m capable of when I step outside of my comfort zone. Completing this project for a hackathon also helped me gain confidence in my ability to build and ship solo projects under a tight deadline.</div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          Challenges
        </div>
        <div className="px-5 lg:mx-40">A major challenge I faced during the development of OpenMoji was learning JavaScript for the first time. Understanding how to structure functions, handle parameters, and apply correct syntax required patience and persistent effort. Additionally, navigating Adobe Express's development tools was unfamiliar territory. However, through trial and error and continuous learning, I was able to overcome these obstacles and bring the add-on to life.</div>
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
            <a href="https://devpost.com/software/openmoji" target="_blank">DevPost Link</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
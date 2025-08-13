import MediaCarousel from "@/app/ui/mediaCarousel";
import Tools from "@/app/ui/tools";

export default function Hack8() {

  const tools = ["react", "git", "github",]

  const media = [
    {
      id: 1,
      type: 'youtube' as const,
      src: 'https://www.youtube.com/embed/bjo-rn8R_4k',
    },
  ];

  return (
    <div className="mb-15 md:mb-40">
      <div className="flex flex-col items-center justify-center bg-red-50 md:px-20 p-5 md:py-20 py-10">
        <div className="font-bold md:text-4xl md:pb-5 pb-1 text-black text-2xl">Movie Booking Website</div>
        <div className="text-black md:text-xl text-sm text-center"> Website used to book movie seats at a theater </div>
      </div>
      <MediaCarousel media={media} />
      <div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          What it does
        </div>
        <div className="px-5 lg:mx-40">This website was developed as part of a class project focused on building a fully functional movie booking platform for a theater. The site enables users to browse movie showtimes, view available seats, and securely book tickets. Users can create both customer and administrator accounts, with distinct access levels and features. Booked seats are updated in real-time to prevent double-booking, ensuring a seamless and accurate reservation process. User data, including email addresses, usernames, encrypted passwords, and payment methods, is securely stored and managed in a backend database, emphasizing both usability and security.</div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          Role
        </div>
        <div className="px-5 lg:mx-40">I was responsible for designing and implementing the front-end interface of the website using React.js. This included developing key components such as the homepage, movie listings, seat selection, and user dashboards. I also designed the website’s navigation system, ensuring a clear and intuitive user experience across different sections of the site.</div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          Accomplishments
        </div>
        <div className="px-5 lg:mx-40">Through this project, I significantly deepened my understanding of React.js, including component-based architecture, state management, and the use of hooks. I also became much more comfortable with Git, particularly in managing branches, handling merge conflicts, and collaborating with a team using version control best practices. Working on a real-world style application helped me improve my front-end development skills, especially in creating responsive and user-friendly interfaces. Additionally, I gained valuable experience integrating front-end components with backend APIs and working with dynamic data in a production-like environment.</div>
        <div className="text-2xl md:text-3xl font-bold p-5 md:py-10 lg:mx-40">
          Challenges
        </div>
        <div className="px-5 lg:mx-40">This was one of my first experiences working in a small development team. It required me to communicate effectively, delegate tasks, and write modular, readable code that could be easily understood and maintained by other team members. I learned the importance of maintaining consistent coding standards, using clear commit messages, and organizing code in a scalable way to support future features.</div>
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
            <a href="https://github.com/Brett-Ruane/Cinema-booking" target="_blank">GitHub Repo</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
import { FocusCards } from "../ui/focus-cards";

export default function ProjectsPage() {

  const cards = [
    {
      title: "Sssync.com",
      subtitle: "Free Lance Project",
      src: "sssyncLanding.png",
    },
    {
      title: "Metrics Project",
      subtitle: "Company Project",
      src: "MetricsPhoto.png",
    },
    {
      title: "UGA Hackathon 9: OpenMoji",
      subtitle: "Hackathon Contest Submission",
      src: "http://img.youtube.com/vi/kbBP9e5OI5o/maxresdefault.jpg",
    },
    {
      title: "UGA Hackathon 8: TappedIn",
      subtitle: "Hackathon Contest Submission",
      src: "hack8winner.png",
    },
    {
      title: "UGA Hackathon 7: Run The World",
      subtitle: "Hackathon Contest Submission",
      src: "hack7project.png",
    },
    {
      title: "UGA Software Engineering: Movie Booking Website",
      subtitle: "Class Project",
      src: "https://i.ytimg.com/vi/bjo-rn8R_4k/maxresdefault.jpg",
    },
    {
      title: "Distributed Project 1",
      subtitle: "Class Project",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Distributed Project 2",
      subtitle: "Class Project",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Distributed Project 3",
      subtitle: "Class Project",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];


  return (
    <div className="p-10">
      <div className="w-full h-full items-center pb-20 rounded-2xl">
            <h1 className="font-bold font-serif pt-15 text-center bg-black bg-clip-text text-3xl sm:text-4xl md:text-5xl">
              My Projects
            </h1>
            <p className="font-mono mt-4 text-center bg-clip-text text-lg sm:text-xl md:text-xl">
              A List of Projects I have worked on throughout my life. See what I've accomplished so far.
            </p>
          </div>

      <FocusCards cards={cards} />
    </div>
  );
}
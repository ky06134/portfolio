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
      src: "MetricsPhoto.png",
    },
    {
      title: "UGA Hackathon 9: OpenMoji",
      src: "http://img.youtube.com/vi/kbBP9e5OI5o/maxresdefault.jpg",
    },
    {
      title: "UGA Hackathon 8: TappedIn",
      src: "hack8winner.png",
    },
    {
      title: "UGA Hackathon 7: Run The World",
      src: "hack7project.png",
    },
    {
      title: "UGA Software Engineering: Movie Booking Website",
      src: "https://i.ytimg.com/vi/bjo-rn8R_4k/maxresdefault.jpg",
    },
    {
      title: "Distributed Project 1",
      src: "distributedProject1.png",
    },
    {
      title: "Distributed Project 2",
      src: "distributedProject1.png",
    },
    {
      title: "Distributed Project 3",
      src: "distributedProject1.png",
    },
    {
      title: "UGA ACM: Marketplace",
      src: "distributedProject1.png",
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
import { FocusCards } from "../ui/focus-cards";

export default function ProjectsPage() {

  const cards = [
    {
      title: "Sssync.com",
      subtitle: "Free Lance Project",
      src: "https://img.youtube.com/vi/k_Ip3h0agso/maxresdefault.jpg",
      description: "On a quiet Tuesday morning, a stray balloon floated lazily across the sky, its red skin catching the sunlight as it drifted over rooftops and telephone wires. Below, a cat perched on a windowsill tracked it with unblinking eyes, tail twitching in rhythm. No one knew where the balloon had come from, but for a few minutes, it became the most interesting thing in the neighborhood—a drifting dot of color against the pale blue. Children pointed, dogs barked, and even the grumpy mailman paused mid-step to watch it rise. Then, as suddenly as it appeared, it vanished behind a cloud, leaving behind only a sense of mild wonder.",
      contributors: (<div><a className="hover:text-blue-400" href="https://www.linkedin.com/in/danielosagie/" target="_blank">Daniel Osagie, </a><a className="hover:text-blue-400" href="https://www.linkedin.com/in/ethanmpham/" target="_blank">Ethan Pham</a></div>),
      video: "https://www.youtube.com/embed/k_Ip3h0agso",
      tools: (<div className="flex flex-wrap justify-center gap-3">
        <div className="flex flex-col items-center w-24">
          <img src="React.png" className="w-full max-w-[20px] h-auto" />
          <p className="text-center text-sm sm:text-base text-black">React</p>
        </div>
        <div className="flex flex-col items-center w-24">
          <img src="Material UI.png" className="w-full max-w-[20px] h-auto" />
          <p className="text-center text-sm sm:text-base text-black">Material UI</p>
        </div>
        <div className="flex flex-col items-center w-24">
          <img src="Node.js.png" className="w-full max-w-[20px] h-auto" />
          <p className="text-center text-sm sm:text-base text-black">Node.js</p>
        </div>
        <div className="flex flex-col items-center w-24">
          <img src="Git.png" className="w-full max-w-[20px] h-auto" />
          <p className="text-center text-sm sm:text-base text-black">Git</p>
        </div>
      </div>
      ),
    },
    {
      title: "Metrics Project",
      subtitle: "Company Project",
      src: "MetricsPhoto.png",
      description: "Free lance Project started with a small group",
      contributors: "Robins AFB Metrics Team",
      video: "",
      tools: (<div className="flex flex-wrap justify-center gap-3">
        <div className="flex flex-col items-center w-24">
          <img src="React.png" className="w-full max-w-[20px] h-auto" />
          <p className="text-center text-sm sm:text-base text-black">React</p>
        </div>
        <div className="flex flex-col items-center w-24">
          <img src="Material UI.png" className="w-full max-w-[20px] h-auto" />
          <p className="text-center text-sm sm:text-base text-black">Material UI</p>
        </div>
        <div className="flex flex-col items-center w-24">
          <img src="Node.js.png" className="w-full max-w-[20px] h-auto" />
          <p className="text-center text-sm sm:text-base text-black">Node.js</p>
        </div>
        <div className="flex flex-col items-center w-24">
          <img src="Git.png" className="w-full max-w-[20px] h-auto" />
          <p className="text-center text-sm sm:text-base text-black">Git</p>
        </div>
      </div>)
    },
    {
      title: "UGA Hackathon 8: Tapped In",
      subtitle: "Hackathon Contest Submission",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Free lance Project started with a small group",
      contributors: "",
      video: "https://www.youtube.com/embed/Ljz048jijoA",
      tools: (<img src="React.png" height={50} width={50} />),
    },
    {
      title: "UGA Software Engineering: Movie Booking Website",
      subtitle: "Class Project",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Free lance Project started with a small group",
      contributors: "",
      video: "https://www.youtube.com/embed/bjo-rn8R_4k",
      tools: (<img src="Jira.png" height={50} width={50} />)
    },
    {
      title: "Distributed Project 1",
      subtitle: "Class Project",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Free lance Project started with a small group",
      contributors: "",
      video: "https://www.youtube.com/embed/bjo-rn8R_4k",
      tools: (<img src="Jira.png" height={50} width={50} />)
    },
    {
      title: "Distributed Project 2",
      subtitle: "Class Project",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Free lance Project started with a small group",
      contributors: "",
      video: "https://www.youtube.com/embed/bjo-rn8R_4k",
      tools: (<img src="Jira.png" height={50} width={50} />)
    },
    {
      title: "Distributed Project 3",
      subtitle: "Class Project",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Free lance Project started with a small group",
      contributors: "",
      video: "https://www.youtube.com/embed/bjo-rn8R_4k",
      tools: (<img src="Jira.png" height={50} width={50} />)
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
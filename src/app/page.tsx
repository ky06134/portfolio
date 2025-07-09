"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "./ui/aurora-backgrounds";
import { FloatingDock } from "./ui/floating-dock";
import { cn } from "./libs/utils";
import { Button } from "./ui/stateful-button";
import { Card, Carousel } from "./ui/apple-cards-carousel";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHome,
} from "@tabler/icons-react";



export default function Home() {

  const DummyContent = () => {
    return (
      <>
        {[...new Array(3).fill(1)].map((_, index) => {
          return (
            <div
              key={"dummy-content" + index}
              className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                  The first rule of Apple club is that you boast about Apple club.
                </span>{" "}
                Keep a journal, quickly jot down a grocery list, and take amazing
                class notes. Want to convert those notes to text? No problem.
                Langotiya jeetu ka mara hua yaar is ready to capture every
                thought.
              </p>
              <img
                src="https://assets.aceternity.com/macbook.png"
                alt="Macbook mockup from Aceternity UI"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              />
            </div>
          );
        })}
      </>
    );
  };


  const data = [
    {
      category: "Artificial Intelligence",
      title: "You can do more with AI.",
      src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent />,
    },
    {
      category: "Productivity",
      title: "Enhance your productivity.",
      src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent />,
    },
    {
      category: "Product",
      title: "Launching the new Apple Vision Pro.",
      src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent />,
    },

    {
      category: "Product",
      title: "Maps for your iPhone 15 Pro Max.",
      src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent />,
    },
    {
      category: "iOS",
      title: "Photography just got better.",
      src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent />,
    },
    {
      category: "Hiring",
      title: "Hiring for a Staff Software Engineer",
      src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent />,
    },
  ];

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full" />
      ),
      href: "",
      target: ""
    },

    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full" />
      ),
      href: "https://github.com/ky06134",
      target: "_blank",
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full" />
      ),
      href: "https://www.linkedin.com/in/kevin-yg/",
      target: "_blank",
    },

  ];

  const onButtonClick = () => {
    const pdfUrl = "Computer Science Resume.pdf"
    const link = document.createElement("a")
    link.href = pdfUrl
    link.download = "Kevin_Yang_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  

  return (
    <div>
      <AuroraBackground>
        <div className="z-20 fixed absolute bottom-15 right-10">
          <FloatingDock
            items={links}
          />
        </div>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >

          <div className="text-4xl md:text-6xl font-bold">
            Hi There, I'm Kevin Yang
          </div>
          <div className="font-extralight text-base md:text-3xl py-4">
            Software Developer Based Around Atlanta, GA
          </div>
          <div className="flex h-40 w-full items-center justify-center">
            <Button
              onClick={onButtonClick}>
              My Resume
            </Button>
          </div>
        </motion.div>
      </AuroraBackground>
      <div>
        <div className="relative flex h-full items-center justify-center bg-white">
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:40px_40px]",
            )}
          />
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute inset-0 flex items-center justify-center bg-grey-50"></div>
          <div className="h-full flex flex-col">
            <div className="h-auto mt-20 z-10 flex flex-col md:flex-row items-center justify-center px-4 gap-8 pb-15">
              <img src="IMG_5239.jpg" className="rounded-2xl w-full max-w-sm md:max-w-md lg:max-w-lg h-auto" />
              <div className="text-center md:text-left md:ml-12 px-4 bg-black bg-clip-text text-transparent py-6 text-3xl sm:text-4xl md:text-6xl ">
                A Bit About Me
                <p className="mt-4 max-w-xl text-base sm:text-lg md:text-xl lg:text-2xl text-black ">
                  I'm a Front-End Software Developer with 4+ years of experience building scalable web applications using React.
                  I have a passion in designing clean, efficient code and creating an amazing web experience for end users.
                  I'm particularly passionate about learning new ways to improve my skills.
                  Take a look around my portfolio to see what I’ve been working on—and feel free to get in touch!
                </p>
              </div>
            </div>
            <div className="py-10 z-10 flex flex-col items-center">
              <div className="relative bg-black bg-clip-text pt-8 text-4xl text-transparent sm:text-6xl">
                Tech Stack
              </div>
              <p className="mt-4 max-w-xl text-base sm:text-lg md:text-xl lg:text-2xl text-black pb-8">
                Tools I have been working with recently
              </p>
              <div className="pb-10 flex flex-wrap max-w-3xl justify-center gap-6">
                <div className="flex flex-col items-center w-24">
                  <img src="React.png" className="w-12 h-12 mb-2" height={50} width={50} />
                  <p className="text-center text-sm sm:text-base text-black">React</p>
                </div>
                <div className="flex flex-col items-center w-24">
                  <img src="Next.js.png" className="w-12 h-12 mb-2 bg-white" height={50} width={50} />
                  <p className="text-center text-sm sm:text-base text-black">Next.js</p>
                </div>
                <div className="flex flex-col items-center max-w-24">
                  <img src="Tailwind CSS.png" className="w-12 h-12 mb-2" height={50} width={50} />
                  <p className="text-center text-sm sm:text-base text-black">Tailwind CSS</p>
                </div>
                <div className="flex flex-col items-center w-24">
                  <img src="Material UI.png" className="w-12 h-12 mb-2" height={50} width={50} />
                  <p className="text-center text-sm sm:text-base text-black">Material UI</p>
                </div>
                <div className="flex flex-col items-center w-24">
                  <img src="Python.png" className="w-12 h-12 mb-2" height={50} width={50} />
                  <p className="text-center text-sm sm:text-base text-black">Python</p>
                </div>
                <div className="flex flex-col items-center w-24">
                  <img src="Node.js.png" className="w-12 h-12 mb-2" height={50} width={50} />
                  <p className="text-center text-sm sm:text-base text-black">Node.js</p>
                </div>
                <div className="flex flex-col items-center w-24">
                  <img src="GitLab.png" className="w-12 h-12 mb-2" height={50} width={50} />
                  <p className="text-center text-sm sm:text-base text-black">GitLab</p>
                </div>
                <div className="flex flex-col items-center w-24">
                  <img src="Azure Devops.png" height={50} width={50} />
                  <p className="text-center text-sm sm:text-base text-black">Azure Devops</p>
                </div>
                <div className="flex flex-col items-center w-24">
                  <img src="Jira.png" height={50} width={50} />
                  <p className="text-center text-sm sm:text-base text-black">Jira</p>
                </div>
                <div className="flex flex-col items-center w-24">
                  <img src="Git.png" height={50} width={50} />
                  <p className="text-transparent text-center text-sm sm:text-base text-black">Git</p>
                </div>
              </div>
              <div className="w-full h-full py-20">
                <h2 className="pl-9 mx-auto text-black text-3xl sm:text-5xl">
                  Projects
                </h2>
                <Carousel items={cards} />
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

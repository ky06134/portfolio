"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "./ui/aurora-backgrounds";
import { FloatingDock } from "./ui/floating-dock";
import { cn } from "./libs/utils";
import { Button } from "./ui/stateful-button";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHome,
} from "@tabler/icons-react";



export default function Home() {

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
                "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              )}
            />
            {/* Radial gradient for the container to give a faded look */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="h-full flex flex-col">
              <div className="h-auto mt-20 z-20 flex flex-col md:flex-row items-center justify-center px-4 gap-8">
                <img src="IMG_5239.jpg" className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto" />
                <div className="text-center md:text-left md:ml-12 px-4 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent py-6 text-3xl sm:text-4xl md:text-6xl font-bold">
                  A Bit About Me
                  <p className="mt-4 max-w-xl text-base sm:text-lg md:text-xl lg:text-2xl text-black ">
                    I'm a Front-End Software Developer with 4+ years of experience building scalable web applications using React.
                    I have a passion in designing clean, efficient code and creating an amazing web experience for end users.
                    I'm particularly passionate about learning new ways to improve my skills.
                    Take a look around my portfolio to see what I’ve been working on—and feel free to get in touch!
                  </p>
                </div>
              </div>
              <div className="py-10 z-20 flex flex-col items-center">
                <div className="relative bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text pt-8 text-4xl font-bold text-transparent sm:text-6xl">
                  Tech Stack
                </div>
                <p className="mt-4 max-w-xl text-base sm:text-lg md:text-xl lg:text-2xl text-black font-bold pb-8">
                  Tools I have been working with recently
                </p>
                <div className="flex flex-wrap max-w-3xl justify-center gap-6">
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
                    <p className="text-center text-sm sm:text-base text-black">Git</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
    </div>
  );
}

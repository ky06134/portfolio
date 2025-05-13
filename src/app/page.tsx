"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "./ui/aurora-backgrounds";

export default function Home() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-start justify-start px-4"
      >
        
        <div className="">
        Contact
        </div>
        <div className="text-1xl md:text-7xl font-bold dark:text-white text-center">
          Hi There, I'm Kevin Yang
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Software Developer
        </div>
        
      </motion.div>
    </AuroraBackground>
  );
}

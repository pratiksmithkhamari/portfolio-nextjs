"use client";
import React from "react";
import { easeIn, motion } from "framer-motion";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SkillSection = () => {
  const icons = [
    {
      name: "Next.js",
      icon: <RiNextjsFill />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      name: "Express",
      icon: <SiExpress />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "TailwindCSS",
      icon: <RiTailwindCssFill />,
    },
    {
      name: "Framer Motion",
      icon: <TbBrandFramerMotion />,
    },
  ];

 

  return (
    <div className="bg-gradient-to-t from-slate-700 to-slate-800 h-[50%] justify-center items-center flex gap-7 flex-col ">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeIn" }}
        className="sm:text-6xl text-4xl font-bold mx-auto my-3 text-zinc-300"
      >
        Tech Stack
      </motion.h2>
      <div className="flex gap-5 flex-wrap">
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            className="bg-slate-800 m-2 p-2 rounded-sm cursor-pointer hover:shadow-lg"
            whileHover={{scale:1.07}}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <p className="text-6xl">{icon.icon}</p>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{icon.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;

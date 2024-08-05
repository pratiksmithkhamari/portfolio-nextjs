"use client";
import { Libre_Baskerville } from "next/font/google";
import React from "react";
import { motion } from "framer-motion";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["700", "700"], // specify the weights you need
});

const Main = () => {
  const animatetext=(delay) => ({
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { delay: delay, duration: 0.7 } },
  });
  return (
    <>
      <div className="flex sm:flex-row flex-col justify-center min-h-[100vh] sm:gap-0 gap-40 items-center sm:h-screen bg-gradient-to-b from-slate-800 to-slate-600">
        <div className="sm:w-1/2 w-[80%] sm:mt-10 -mt-[10rem]  h-full flex flex-col items-center justify-center">
          <motion.h2
            variants={animatetext(0.7)}
            initial="hidden"
            animate="show"
            className={`sm:text-6xl text-3xl sm:ml-28 ml-0 sm:my-0 my-0 w-[80%] mx-0 sm:mx-auto font-bold text-zinc-300 ${libreBaskerville.className}`}
          >
            Hi, I'm Pratiksmith Khamari
          </motion.h2>
          <motion.p
            variants={animatetext(0.8)}
            initial="hidden"
            animate="show"
            className={`sm:ml-28 ml-0 mx-auto sm:mx-auto  sm:w-[75%] text-zinc-300 ${libreBaskerville.className}`}
          >
            I am a Freelance Fullstack Web Developer based in India. I create
            immersive and beautiful web applications with carefully crafted code
            and user-centric design.
          </motion.p>
          <div className="mt-11">
            <motion.button
              whileTap={{ scale: 0.9 }}
              variants={animatetext(0.9)}
              initial="hidden"
              animate="show"
              className="bg-zinc-300 rounded-sm shadow-xl  hover:bg-zinc-200 hover:shadow-2xl tracking-tight text-slate-800 p-4 text-xl font-bold"
            >
              Let's Connect
            </motion.button>
          </div>
        </div>

        <div className="w-1/2 h-[10vh] sm:h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}
            className="sm:max-h-[60%]  p-2 min-w-[350px] bg-zinc-400 shadow-xl rounded-md flex justify-center items-center"
          >
            <motion.img
              whileHover={{ scale: 1.01 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.8,duration:0.7 } }}
              height={300}
              width={300}
              alt="Profile Image"
              className="rounded-md cursor-pointer sm:max-h-[450px] max-h-80 sm:min-w-[350px] min-w-56"
              src={"/profileimg.JPG"}
            ></motion.img>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Main;

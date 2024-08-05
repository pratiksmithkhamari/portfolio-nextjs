"use client";

import React from "react";
import { motion } from "framer-motion";

const Details = () => {
  const animateText = (delay) => ({
    start: {
      opacity: 0,
      y: 50,
    },
    end: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        duration: 0.6,
      },
    },
  });

  return (
    <div
      className="min-h-[80%] bg-slate-500 flex justify-center items-center"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
      }}
    >
      <div className="sm:max-h-[60vh] min-h-[60vh] sm:max-w-[80%] max-w-[100%] rounded-lg flex sm:flex-row flex-col justify-center items-center bg-zinc-200">
        <motion.div className="max-w-[50%] rounded-md overflow-hidden p-7">
          <motion.img
            src={
              "https://i.pinimg.com/originals/81/17/8b/81178b47a8598f0c81c4799f2cdd4057.gif"
            }
            className="min-w-[100%] rounded-lg shadow-xl max-h-[100%]"
            alt="Animated illustration"
          />
        </motion.div>
        <motion.div className="w-[50%]">
          <motion.h1
            initial="start"
            whileInView="end"
            viewport={{ once: true, amount: 0.5 }} // Trigger the animation once when 50% of the element is in view
            variants={animateText(0.5)} // Using the animation with a slight delay for the heading
            className="text-4xl font-bold my-3 text-slate-800"
          >
            I am a Professional Fullstack Web Developer
          </motion.h1>
          <motion.p
            initial="start"
            whileInView="end"
            viewport={{ once: true, amount: 0.5 }} // Trigger the animation once when 50% of the element is in view
            variants={animateText(1)} // Using the animation with a delay for the paragraph
            className="text-slate-700"
          >
            Welcome to my digital realm, where I weave innovation into code and
            craft seamless web experiences. As a Professional Fullstack Web
            Developer, I specialize in skillfully blending the artistry of
            frontend design with the technical expertise of backend development.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Details;

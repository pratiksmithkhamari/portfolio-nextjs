"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, User, Briefcase, GraduationCap, Target, Heart } from "lucide-react";

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-600">
            Passionate Developer | Creative Problem Solver | Lifelong Learner
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.section 
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
          variants={itemVariants}
        >
          <div className="flex items-start gap-4">
            <User className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who I Am</h2>
              <p className="text-gray-700 leading-relaxed">
                I'm a full-stack developer with a passion for creating elegant solutions to complex problems. 
                With [X] years of experience in web development, I specialize in building responsive, 
                user-friendly applications that make a difference.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section 
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
          variants={itemVariants}
        >
          <div className="flex items-start gap-4">
            <Briefcase className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Professional Journey</h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Throughout my career, I've worked on diverse projects ranging from e-commerce platforms 
                  to enterprise-level applications. My experience includes:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-500" />
                    Frontend development with React, Next.js, and modern CSS frameworks
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-500" />
                    Backend development using Node.js and databases
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-500" />
                    Cloud infrastructure and deployment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Education */}
        <motion.section 
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
          variants={itemVariants}
        >
          <div className="flex items-start gap-4">
            <GraduationCap className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Education & Skills</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Education</h3>
                  <p className="text-gray-700">
                    Bachelor's in [Your Degree]<br />
                    [University Name], [Year]
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Core Skills</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-500" />
                      JavaScript/TypeScript
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-500" />
                      React & Next.js
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-500" />
                      Node.js & Express
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Goals */}
        <motion.section 
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
          variants={itemVariants}
        >
          <div className="flex items-start gap-4">
            <Target className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Drives Me</h2>
              <p className="text-gray-700 leading-relaxed">
                I'm passionate about creating technology that makes a positive impact. 
                My goal is to continue growing as a developer while contributing to 
                meaningful projects that push the boundaries of what's possible on the web.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Personal Interests */}
        <motion.section 
          className="bg-white rounded-xl shadow-lg p-8"
          variants={itemVariants}
        >
          <div className="flex items-start gap-4">
            <Heart className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Beyond Coding</h2>
              <p className="text-gray-700 leading-relaxed">
                When I'm not coding, you can find me [Your Interests/Hobbies]. 
                I believe that maintaining a well-rounded lifestyle helps fuel creativity 
                and brings fresh perspectives to problem-solving.
              </p>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default AboutMe;
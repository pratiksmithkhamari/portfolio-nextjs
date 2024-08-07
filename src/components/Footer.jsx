"use client";

import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialMideia = [
    {
      name: "Instagram",
      link: "",
      icon: <FaInstagram size={30} color={"#fff"} />,
    },
    {
      name: "Github",
      link: "https://github.com/pratiksmithkhamari",
      icon: <FaGithub size={30} color={"#fff"} />,
    },
    {
      name: "Gmail",
      link: "https://pratiksmith40@gmail.com",
      icon: <SiGmail size={30} color={"#fff"} />,
    },
    {
      name: "Linkedin",
      link: "https://linkedin.com/in/pratiksmith-khamari-235880264",
      icon: <FaLinkedin size={30} color={"#fff"} />,
    },
  ];

  return (
    <footer className="bg-slate-800 text-zinc-300 py-6">
      {/* <div className="container mx-auto flex  items-center justify-center">
        
        <nav className="flex gap-4 mt-3">
          
          
        </nav>
      </div> */}
      <div className="sm:flex-row flex flex-col justify-center sm:justify-evenly">
        <div className="flex gap-4   items-center">
          <button onClick={scrollToTop} className="hover:text-zinc-400">
            Home
          </button>
          <Link href="/about" className="hover:text-zinc-400">
            About
          </Link>
          <Link href="/contact" className="hover:text-zinc-400">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-zinc-400">
            Privacy Policy
          </Link>
        </div>
        <div>
          <p className="flex items-center text-lg mb-2">
            Built with <FaHeart className="mx-1 text-red-500" /> and dedication.
          </p>
          <p className="text-sm">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4 items-center">
          {socialMideia?.map((media, index) => {
            return (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href={media?.link}>{media?.icon}</a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{media.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

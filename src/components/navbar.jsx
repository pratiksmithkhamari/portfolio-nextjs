"use client";

import Link from "next/link";
import React from "react";
import { Roboto_Slab, Libre_Baskerville } from "next/font/google";
import { usePathname } from "next/navigation";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["700"], 
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: "700",
});

const Navbar = () => {
  const pathName = usePathname();
  console.log(pathName);

  const data = [
    {
      id: 1,
      name: "Home",
      link: "/",
      className:
        "bg-green-600 p-2 rounded-lg active:bg-green-700 px-3 hover:!text-zinc-100 ",
    },
    {
      id: 2,
      name: "Blog",
      link: "https://blogging-site-next-js.vercel.app/",
      className:
        "bg-green-600 p-2 rounded-lg active:bg-green-700 px-3 hover:!text-zinc-100 ",
    },
    {
      id: 3,
      name: "Projects",
      link: "/projects",
      className:
        "bg-green-600 p-2 rounded-lg active:bg-green-700 px-3 hover:!text-zinc-100 ",
    },
    {
      id: 4,
      name: "Contact",
      link: "/contact",
      className:
        "bg-green-600 p-2 rounded-lg active:bg-green-700 px-3 hover:!text-zinc-100 ",
    },
  ];

  return (
    <div className=" h-24 bg-slate-600 text-white justify-between  flex gap-6  item-center">
      <Link href={"/"}>
        <div className="h-24 flex items-center text-xl text-white ml-7 cursor-pointer">
          <h1 className={`flex items-center gap-2 ${robotoSlab.className}`}>
            <div className="">Pratiksmith </div>
            <span className="text-green-600 ">Khamari</span>
          </h1>
        </div>
      </Link>
      <div className="flex gap-10 mr-8 h-full items-center">
        {data.map((data) => {
          return (
            <>
              <Link href={data.link} key={data.id}>
                <h2
                  className={`text-white hidden sm:block text-xl cursor-pointer hover:underline hover:text-green-600 ${
                    pathName == data.link ? data.className : ""
                  }  ${libreBaskerville.className}`}
                  key={data?.id}
                >
                  {data?.name}
                </h2>
              </Link>
            </>
          );
        })}
        <h2 className="sm:hidden block">data</h2>
      </div>
    </div>
  );
};

export default Navbar;

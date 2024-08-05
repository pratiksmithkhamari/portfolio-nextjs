import Link from "next/link";
import React from "react";
import { Roboto_Slab, Libre_Baskerville } from "next/font/google";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["700", "700"], // specify the weights you need
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: "700",
});

const Navbar = () => {
  const data = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Projects",
      link: "/projects",
    },
    {
      id: 4,
      name: "Skills",
      link: "/skills",
    },
  ];
  return (
    <div className=" h-24 bg-slate-600 text-white justify-between  flex gap-6  item-center">
      <Link href={"/"}>
        <div className="h-24 flex items-center text-xl text-white ml-7 cursor-pointer">
          <h1 className={`flex items-center gap-2 ${robotoSlab.className}`}>
            <div className="">Pratiksmith </div>
            <span className="text-red-400 ">Khamari</span>
          </h1>
        </div>
      </Link>
      <div className="flex gap-10 mr-8 h-full items-center">
        {data.map((data) => {
          return (
            <>
              <Link href={data.link}>
                <h2
                  className={`text-white hidden sm:block text-xl cursor-pointer hover ${libreBaskerville.className}`}
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

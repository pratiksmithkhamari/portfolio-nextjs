import React from "react";
import { Goblin_One } from "next/font/google";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Skills = () => {
  return (
    <div>
      <div className="h-32 flex justify-center items-center ">
        <h1
          className={`font-serif capitalize text-center text-4xl font-bold text-zinc-800`}
        >
          let's connect
        </h1>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[700px] bg-green-200 h-[700px]">
          <div className="flex justify-center flex-col gap-4 text-zinc-700 items-center w-[50%] h-full mx-auto">
            <Label className=" w-full">First Name</Label>
            <Input />
            <Label className="  w-full">Last Name</Label>
            <Input />
            <Label className="  w-full">Email</Label>
            <Input className="" />
            <Label className="  w-full">Message</Label>
            <Textarea />
            <Button variant="" className="w-[40%] bg-green-600 text-zinc-200">Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

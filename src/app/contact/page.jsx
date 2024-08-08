"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Skills = () => {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_EMAIL_API);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        console.log(result);
        event.target.reset(); // Reset the form after successful submission
      } else {
        console.error("Submission failed:", result);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  }

  return (
    <div>
      <div className="h-32 flex justify-center items-center">
        <h1 className="font-serif capitalize text-center text-4xl font-bold text-zinc-800">
          Let's Connect
        </h1>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[700px] bg-green-200 h-[600px]">
          <form
            onSubmit={handleSubmit}
            className="flex justify-center items-center h-full w-full"
          >
            <div className="flex justify-center flex-col gap-4 text-zinc-700 items-center w-[60%] h-full mx-auto">
              <Label className="w-full">Full Name</Label>
              <Input placeholder="Enter full name" name="name" required />

              <Label className="w-full">Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />

              <Label className="w-full">Message</Label>
              <Textarea
                placeholder="Enter your message"
                name="message"
                required
              />

              <Button className="w-[100%] bg-green-600 my-4 text-zinc-100 text-[1.1rem]">
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Skills;
``;

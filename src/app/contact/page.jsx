"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const ContactForm = () => {
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
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success"
        });
        console.log(result);
        event.target.reset();
      } else {
        console.error("Submission failed:", result);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-md mx-auto space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="text-center space-y-2"
          variants={itemVariants}
        >
          <h1 className="text-4xl font-bold text-gray-900 font-serif">
            Let's Connect
          </h1>
          <p className="text-gray-600">
            We'd love to hear from you. Send us a message!
          </p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8"
          variants={itemVariants}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div 
              className="space-y-2"
              variants={itemVariants}
            >
              <Label className="text-gray-700 block">Full Name</Label>
              <Input 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="John Doe"
                name="name"
                required
              />
            </motion.div>

            <motion.div 
              className="space-y-2"
              variants={itemVariants}
            >
              <Label className="text-gray-700 block">Email</Label>
              <Input
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="john@example.com"
                required
              />
            </motion.div>

            <motion.div 
              className="space-y-2"
              variants={itemVariants}
            >
              <Label className="text-gray-700 block">Message</Label>
              <Textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Your message here..."
                name="message"
                rows={4}
                required
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                type="submit"
              >
                Send Message
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
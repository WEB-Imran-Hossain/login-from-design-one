import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const SignUpForm = ({ isRightPanelActive }) => (
  <motion.div
    className="absolute left-0 w-1/2 z-10 transition-all duration-600 ease-in-out"
    initial={{ x: "100%", opacity: 0 }} // Start from right and hidden
    animate={
      isRightPanelActive ? { x: "100%", opacity: 0 } : { x: 0, opacity: 1 }
    } // Slide out to right
    transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.6 }}
  >
    <form className="bg-white flex flex-col items-center p-12 text-center">
      <h1 className="font-bold">Create an Account</h1>
      <div className="social-container flex space-x-4 mt-4">
        {" "}
        {/* Social media sign-up options */}
        <a href="#" className="social text-blue-600">
          <FaFacebookF />
        </a>
        <a href="#" className="social text-red-600">
          <FaGoogle />
        </a>
        <a href="#" className="social text-blue-500">
          <FaLinkedinIn />
        </a>
      </div>
      <span className="text-sm mt-4">or use your email for registration</span>
      <input
        type="text"
        placeholder="Name"
        className="bg-gray-200 border-none p-3 mt-3 w-full"
      />
      <input
        type="email"
        placeholder="Email"
        className="bg-gray-200 border-none p-3 mt-3 w-full"
      />
      <input
        type="password"
        placeholder="Password"
        className="bg-gray-200 border-none p-3 mt-3 w-full"
      />
      <button className="bg-[#014887] text-white font-bold py-3 px-8 mt-5 rounded-full uppercase text-xs tracking-widest transition-transform duration-80 ease-in transform active:scale-95 focus:outline-none">
        Sign Up
      </button>
    </form>
  </motion.div>
);

export default SignUpForm;

import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const SignUpForm = ({ isRightPanelActive }) => (
  <motion.div
    className={`absolute left-0 w-1/2 z-10 transition-all duration-700 ease-in-out  ${
      !isRightPanelActive ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
    }`}
  >
    <form className="bg-white flex flex-col items-center p-12 text-center">
      <h1 className="font-bold">Create an Account</h1>
      <div className="social-container flex space-x-4 mt-4">
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
      <input type="text" placeholder="Name" className="bg-gray-200 border-none p-3 mt-3 w-full" />
      <input type="email" placeholder="Email" className="bg-gray-200 border-none p-3 mt-3 w-full" />
      <input type="password" placeholder="Password" className="bg-gray-200 border-none p-3 mt-3 w-full" />
      <button className="bg-[#014887] text-white font-bold py-3 px-8 mt-5 rounded-full uppercase text-xs tracking-widest transition-transform duration-80 ease-in transform active:scale-95 focus:outline-none">
        Sign Up
      </button>
    </form>
  </motion.div>
);

export default SignUpForm;

import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const SignInForm = ({ isRightPanelActive, isLeftPanelActive }) => (
  <motion.div
    className="absolute left-0 w-1/2 z-10 transition-all duration-600 ease-in-out"
    initial={{ x: "-100%", opacity: 0 }} // Start from left and hidden
    animate={{
      x: isRightPanelActive ? 0 : isLeftPanelActive ? "-100%" : "100%",
      opacity: isRightPanelActive ? 1 : isLeftPanelActive ? 0 : 1,
    }} // Slide in from left or right based on the panel
    transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.6 }}
  >
    <form className="bg-white flex flex-col items-center p-12 text-center">
      <h1 className="font-bold">Sign In</h1>
      <div className="social-container flex space-x-4 mt-4">
        {" "}
        {/* Social media sign-in options */}
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
      <span className="text-sm mt-4">or use your account</span>
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
      <a href="#" className="text-sm mt-4">
        Forgot your password?
      </a>
      <button className="bg-[#014887] text-white font-bold py-3 px-8 mt-5 rounded-full uppercase text-xs tracking-widest transition-transform duration-80 ease-in transform active:scale-95 focus:outline-none">
        Sign In
      </button>
    </form>
  </motion.div>
);

export default SignInForm;

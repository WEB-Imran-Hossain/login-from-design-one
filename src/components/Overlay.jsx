import React from "react";
import { motion } from "framer-motion";

const Overlay = ({ handleSignUpClick, handleSignInClick, isRightPanelActive }) => (
  <motion.div
    className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden z-50 transition-transform duration-700 ease-in-out ${
      isRightPanelActive ? "translate-x-[-100%]" : "translate-x-0"
    }`}
  >
    <div className="bg-gradient-to-r from-[#EE9CEE] to-[#014887] text-white h-full w-[200%] flex items-center justify-center relative">
      <div className="w-1/2 text-center p-10">
        <h1 className="font-bold text-3xl">{isRightPanelActive ? "Welcome Back!" : "Hello, Friend!"}</h1>
        <p className="mt-4 text-sm">
          {isRightPanelActive
            ? "To keep connected with us please login with your personal info"
            : "Enter your personal details and start your journey with us"}
        </p>
        {!isRightPanelActive ? (
          <button
            id="signIn"
            className="bg-transparent border border-white text-white font-bold py-3 px-8 mt-5 rounded-full uppercase text-xs tracking-widest transition-transform duration-100 ease-in transform active:scale-95 focus:outline-none"
            onClick={handleSignUpClick}
          >
            Sign In
          </button>
        ) : (
          <button
            onClick={handleSignInClick}
            id="signUp"
            className="bg-transparent border border-white text-white font-bold py-3 px-8 mt-5 rounded-full uppercase text-xs tracking-widest transition-transform duration-100 ease-in transform active:scale-95 focus:outline-none"
          >
            Sign Up
          </button>
        )}
      </div>
      <div className="w-1/2 text-center p-10">
        <h1 className="font-bold text-3xl">{isRightPanelActive ? "Hello, Friend!" : "Welcome Back!"}</h1>
        <p className="mt-4 text-sm">
          {isRightPanelActive
            ? "Enter your personal details and start your journey with us"
            : "To keep connected with us please login with your personal info"}
        </p>
      </div>
    </div>
  </motion.div>
);

export default Overlay;

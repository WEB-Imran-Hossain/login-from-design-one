import React from "react";
import { motion } from "framer-motion";

const Overlay = ({
  handleSignUpClick,
  handleSignInClick,
  isRightPanelActive,
}) => (
  <motion.div
    // Container for the sliding overlay, starts from the right side
    className="absolute top-0 left-1/2 w-1/2 h-full overflow-hidden z-50"
    initial={{ x: "100%" }} // Initial position off-screen
    animate={{ x: "0%" }} // Animate into view
    transition={{
      type: "spring",
      stiffness: 60,
      damping: 12,
      duration: 0.8,
      ease: "easeInOut",
    }} // Smooth spring animation
  >
    <div
      // Background gradient and main overlay content, slides left or right based on `isRightPanelActive`
      className={`bg-gradient-to-r from-[#EE9CEE] to-[#014887] text-white h-full w-[200%] flex items-center justify-center relative transition-transform duration-700 ease-in-out ${
        isRightPanelActive ? "translate-x-[-100%]" : "translate-x-0"
      }`}
    >
      <div
        // Left side content of the overlay
        className={`w-1/2 text-center p-10 transition-transform duration-700 ease-in-out ${
          isRightPanelActive ? "translate-x-[-20%]" : "translate-x-0"
        }`}
      >
        <h1 className="font-bold text-3xl">
          {isRightPanelActive ? "Welcome Back!" : "Hello, Friend!"}
          {/* Switch greeting based on `isRightPanelActive` */}
        </h1>
        <p className="mt-4 text-sm">
          {isRightPanelActive
            ? "To keep connected with us please login with your personal info"
            : "Enter your personal details and start your journey with us"}
          {/* Change message based on `isRightPanelActive` */}
        </p>
        <button
          // Sign In button for left side
          id="signIn"
          className="bg-transparent border border-white text-white font-bold py-3 px-8 mt-5 rounded-full uppercase text-xs tracking-widest transition-transform duration-100 ease-in transform active:scale-95 focus:outline-none"
          onClick={handleSignInClick} // Call `handleSignInClick` when clicked
        >
          Sign In
        </button>
      </div>
      <div
        // Right side content of the overlay
        className={`w-1/2 text-center p-10 transition-transform duration-700 ease-in-out ${
          isRightPanelActive ? "translate-x-0" : "translate-x-[20%]"
        }`}
      >
        <h1 className="font-bold text-3xl">
          {isRightPanelActive ? "Hello, Friend!" : "Welcome Back!"}
          {/* Switch greeting based on `isRightPanelActive` */}
        </h1>
        <p className="mt-4 text-sm">
          {isRightPanelActive
            ? "Enter your personal details and start your journey with us"
            : "To keep connected with us please login with your personal info"}
          {/* Change message based on `isRightPanelActive` */}
        </p>
        <button
          // Sign Up button for right side
          id="signUp"
          className="bg-transparent border border-white text-white font-bold py-3 px-8 mt-5 rounded-full uppercase text-xs tracking-widest transition-transform duration-100 ease-in transform active:scale-95 focus:outline-none"
          onClick={handleSignUpClick} // Call `handleSignUpClick` when clicked
        >
          Sign Up
        </button>
      </div>
    </div>
  </motion.div>
);

export default Overlay;

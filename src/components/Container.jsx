import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import Overlay from "./Overlay";

const Container = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignUpClick = () => setIsRightPanelActive(true);
  const handleSignInClick = () => setIsRightPanelActive(false);

  return (
    <div
      id="container"
      className={`bg-white rounded-lg shadow-lg relative overflow-hidden w-[768px] max-w-full min-h-[480px] transition-all duration-700 ease-in-out ${
        isRightPanelActive ? "right-panel-active" : ""
      }`}
    >
      <SignUpForm isRightPanelActive={isRightPanelActive} />
      <SignInForm isRightPanelActive={isRightPanelActive} />
      <Overlay
        handleSignUpClick={handleSignUpClick}
        handleSignInClick={handleSignInClick}
        isRightPanelActive={isRightPanelActive}
      />
    </div>
  );
};

export default Container;

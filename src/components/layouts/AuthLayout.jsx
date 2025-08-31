import React from "react";
import UI_IMG from "../../assets/images/bg-img.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-gray-50 lg:gap-20">
      {/* Left Section: Branding + Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-8 sm:h-screen lg:pl-20  ">
        
        {/* TaskForge Branding */}
        <div className="mb-12  text-left w-full">
  <h1 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight drop-shadow-sm">
    TaskForge
  </h1>
  <div className="h-[3px] w-10 bg-primary mt-1 rounded"></div>
</div>

        {/* Form Content */}
        <div className="w-full max-w-md  md:mt-0">
          {children}
        </div>
      </div>

      {/* Right Visual */}
      <div
  className="hidden md:flex md:w-1/2 h-screen bg-cover bg-center"
  style={{ backgroundImage: `url(${UI_IMG})` }}
/>
    </div>
  );
};

export default AuthLayout;
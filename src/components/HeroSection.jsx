import React from "react";
import SocialLinK from "../utilites/SocialLinK";

const HeroSection = () => {
  return (
    <div className="mt-5 md:flex md:items-start md:gap-5 md:justify-between ">
      <img
        src="https://th.bing.com/th/id/OIP.HfKRI-KYFgwmWdq-FxFYKgHaE7?w=233&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
        alt=""
        className="w-full md:w-3/5 h-75 md:my-10"
      />

      <p className="my-8 py-4 md:w-2/5">
        Passionate MERN stack web developer crafting dynamic and responsive web
        applications with a focus on performance and user experience.
        <div className="grid grid-cols-2 w-70 gap-2 my-3 md:mt-10">
          <SocialLinK />
        </div>
      </p>
    </div>
  );
};

export default HeroSection;

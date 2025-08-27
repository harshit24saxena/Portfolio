import React from "react";

const Project = () => {
  return (
    <div id="Project" className="mx-5 sm:flex justify-between my-20 relative">
      <div className='mb-4 sm:w-2/5 '>
        <h3 className="subHeading mb-10">Project</h3>
        <p className="">
          A fully responsive hotel booking and listing website built using the MERN stack. It allows users to browse, search, and filter hotels, view detailed listings with images and amenities, and securely book rooms. 
        </p>
      </div>
        <div className="">
        <img className="sm:h-40 md:h-80" src="/src/assests/bkfull.png" alt="" />
        <img className="sm:h-40 md:h-80" src="/src/assests/profileFull.png" alt="" />
        <img className="border-3 rounded-xl hidden h-100 top-30 absolute sm:block sm:h-70 sm:right-30  md:right-70 lg:right-90" src="/src/assests/homeMobile.png" alt="" />
        </div>
    </div>
  );
};

export default Project;

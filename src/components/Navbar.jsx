import React from "react";

const Navbar = () => {
  return (
    <navbar className="flex justify-between m-3 text-(--headingTextColor)  ">
      <h3 className="m-2 text-nowrap" >Harshit Saxena</h3>
      <div className="flex m-2 sm:flex-row sm:gap-3">
        <a href="#AboutMe">AboutMe</a>
        <a href="#Project">Project</a>
        <a href="#Contact">Contact</a>
      </div>
    </navbar>
  );
};

export default Navbar;

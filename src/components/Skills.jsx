import SkillCard from "../utilities/SkillCard";
import { useEffect, useRef } from "react";

const Skills = () => {

   const ref = useRef(null);

   useEffect(() => {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scrollAnimation");
      }else{
        entry.target.classList.remove("scrollAnimation");
      }
    });
  }
, { threshold: 0});
  if (ref.current) {
    observer.observe(ref.current);
  }
},[])


  return (
    <div className="mx-5 my-10">
      <h3 className="loadingAnimation subHeading mb-6">Skills</h3>
      <div ref={ref} className="rounded-2xl h-fit mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:w-3/5  ">
        {/* create react componet for skill div */}
        <SkillCard />
      </div>
    </div>
  );
};

export default Skills;

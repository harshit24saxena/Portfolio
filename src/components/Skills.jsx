import SkillCard from "../utilites/SkillCard";

const Skills = () => {
  return (
    <div className="mx-5 my-10 ">
      <h3 className="subHeading mb-6">Skills</h3>
      <div className="rounded-2xl h-fit mx-auto bg-[rgba(148,87,33,.2)] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:w-3/5  ">
        {/* create react componet for skill div */}
        <SkillCard />
      </div>
    </div>
  );
};

export default Skills;

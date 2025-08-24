
import SocialLinK from "../utilities/SocialLinK";
import Contact from "./Contact";    

const HeroSection = () => {
  return (
    <div className="mt-5 md:flex md:items-start md:gap-20 md:justify-between">

      <p className="my-8 py-4 md:w-2/5">
        Passionate MERN stack web developer crafting dynamic and responsive web
        applications with a focus on performance and user experience.
        <div className="grid grid-cols-2 w-70 gap-2 my-3 md:mt-10">
          <SocialLinK />
        </div>
      </p>
      <Contact />
    </div>
  );
};

export default HeroSection;

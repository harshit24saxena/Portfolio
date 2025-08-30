import SocialLinK from "../utilities/SocialLinK";
import AboutMe from "./AboutMe";
import Contact from "./Contact";

let SocialLinkData = [
  {
    key: 1,
    src: " https://th.bing.com/th/id/OIP.tIb9b1mnX6y4CR5YxwqL8AHaHw?w=165&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    name: "Github",
    href: "https://github.com/harshit24saxena",
  },
  {
    key: 2,
    src: " https://www.bing.com/th/id/OIP.GkLB-mM207aOg96ZtU7BawHaHa?w=196&h=211&c=8&rs=1&qlt=70&o=7&cb=iavawebp1&dpr=1.3&pid=3.1&rm=3",
    name: "Linkdin",
    href: "",
  },
];

const HeroSection = () => {
  return (
    <div className="mt-5 md:flex">
      <div className="md:w-3/4 mx-5">
        <AboutMe />
        <div className="grid grid-cols-2 w-70 gap-2 my-3 mb-10 md:mb-0 md:mt-10">
          <SocialLinK linkArray={SocialLinkData} />
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default HeroSection;

import SocialLink from '../utilities/SocialLinK';

let SocialLinkData = [
  {
    key: 1,
    src: " https://th.bing.com/th/id/OIP.tIb9b1mnX6y4CR5YxwqL8AHaHw?w=165&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    name: 'Github',
    href:'https://github.com/harshit24saxena/AirBnB'
  },
  {
    key:2,
    src: " https://tse1.mm.bing.net/th/id/OIP.E6-fcGDeuehNrqgvJ-gFHwHaHa?pid=Api&P=0&h=180",
    name: 'open Link',
    href:'https://airbnb-frontend-l1ej.onrender.com/'
  },
];

const Project = () => {
  return (
    <div id="Project" className="mx-5 sm:flex justify-between my-20 relative">
      <div className='mb-4 sm:w-2/5 '>
        <h3 className="subHeading mb-10">Project</h3>
        <p className="">
          A fully responsive hotel booking and listing website built using the MERN stack. It allows users to browse, search, and filter hotels, view detailed listings with images and amenities, and securely book rooms. 
        </p>        
        <div className="grid grid-cols-2 w-70 gap-2 my-3 md:mt-10">
          <SocialLink linkArray={SocialLinkData} />
        </div>
      </div>
        <div className="">
        <img className="sm:h-40 md:h-80" src="/assests/bkFull.png" alt="" />
        <img className="sm:h-40 md:h-80" src="/assests/profileFull.png" alt="" />
        <img className="border-3 rounded-xl hidden h-100 top-30 absolute sm:block sm:h-70 sm:right-30  md:right-70 lg:right-90" src="/assests/homeMobile.png" alt="" />
        </div>
    </div>
  );
};

export default Project;

const SkillList = [
  {
    src: "/assests/rmbg/html-removebg-preview.png",
    name: "HTML",
  },
  {
    src: "/assests/rmbg/css-removebg-preview.png",
    name: "CSS",
  },
  {
       src: "/assests/rmbg/js-removebg-preview.png",
    name: "JAVASCRIPT",
  },
  {
    src: "/assests/rmbg/node-removebg-preview.png",
    name: "NODE JS",
  },
  {
    src: "/assests/rmbg/express-removebg-preview.png",
    name: "EXPRESS JS",
  },
  {
      src: "/assests/rmbg/react-removebg-preview.png",
    name: "REACT JS",
  },
  {
    src: "/assests/rmbg/tailwind-removebg-preview.png",
    name: "TAILWIND",
  },
  {
    src: "/assests/rmbg/git-removebg-preview.png",
    name: "GIT",
  },
  {
    src: "/assests/rmbg/canva-removebg-preview.png",
    name: "CANVA",
  },
  {
    src: "/assests/rmbg/SQL-removebg-preview.png",
    name: "SQL",
  },
  {
    src: "/assests/rmbg/mongoDB-removebg-preview.png",
    name: "MONGODB",
  },
  {
    src: "/assests/rmbg/docker-removebg-preview.png",
    name: "DOCKER",
  },
];
const SkillCard = () => {
  return SkillList.map((item) => {
    return (
      <div
        key={item.name}
        className="w-25 mx-auto my-2 rounded-xl aspect-square border border-(--headingTextColor)"
      >
        <img className="object-cover aspect-square p-2 mx-auto bg-blue-100" src={item.src} alt="" />
        <h6 className="p-2 text-(--headingTextColor)">{item.name}</h6>
      </div>
    );
  });
};

export default SkillCard;

const SkillList = [
  {
    src: "/assests/rmbg/html-removebg-preview.png",
    name: "HTML",
  },
  {
    src: "/assests/rmbg/css-removebg-preview.png",
    name: "css",
  },
  {
       src: "/assests/rmbg/js-removebg-preview.png",
    name: "javascript",
  },
  {
    src: "/assests/rmbg/node-removebg-preview.png",
    name: "node js",
  },
  {
    src: "/assests/rmbg/express-removebg-preview.png",
    name: "express",
  },
  {
      src: "/assests/rmbg/react-removebg-preview.png",
    name: "react",
  },
  {
    src: "/assests/rmbg/tailwind-removebg-preview.png",
    name: "tailwind",
  },
  {
    src: "/assests/rmbg/git-removebg-preview.png",
    name: "git",
  },
  {
    src: "/assests/rmbg/canva-removebg-preview.png",
    name: "canva",
  },
  {
    src: "/assests/rmbg/SQL-removebg-preview.png",
    name: "SQL",
  },
  {
    src: "/assests/rmbg/mongoDB-removebg-preview.png",
    name: "MongoDB",
  },
  {
    src: "/assests/rmbg/docker-removebg-preview.png",
    name: "Docker",
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

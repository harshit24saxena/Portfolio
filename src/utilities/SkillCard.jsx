const SkillList = [
  {
    src: "./src/assests/rmbg/html-removebg-preview.png",
    name: "HTML",
  },
  {
    src: "./src/assests/rmbg/css-removebg-preview.png",
    name: "css",
  },
  {
       src: "./src/assests/rmbg/js-removebg-preview.png",
    name: "javascript",
  },
  {
    src: "./src/assests/rmbg/node-removebg-preview.png",
    name: "node js",
  },
  {
    src: "./src/assests/rmbg/express-removebg-preview.png",
    name: "express",
  },
  {
      src: "./src/assests/rmbg/react-removebg-preview.png",
    name: "react",
  },
  {
    src: "./src/assests/rmbg/tailwind-removebg-preview.png",
    name: "tailwind",
  },
  {
    src: "./src/assests/rmbg/git-removebg-preview.png",
    name: "git",
  },
  {
    src: "./src/assests/rmbg/canva-removebg-preview.png",
    name: "canva",
  },
  {
    src: "./src/assests/rmbg/SQL-removebg-preview.png",
    name: "SQL",
  },
  {
    src: "./src/assests/rmbg/mongoDB-removebg-preview.png",
    name: "MongoDB",
  },
  {
    src: "./src/assests/rmbg/docker-removebg-preview.png",
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
        <img className="h-20 aspect-square p-2 mx-auto" src={item.src} alt="" />
        <h6 className="p-2 text-(--headingTextColor)">{item.name}</h6>
      </div>
    );
  });
};

export default SkillCard;

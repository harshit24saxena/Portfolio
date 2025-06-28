const SkillList = [
  {
    src: "./src/assets/rmbg/html-removebg-preview.png",
    name: "HTML",
  },
  {
    src: "./src/assets/rmbg/css-removebg-preview.png",
    name: "css",
  },
  {
       src: "./src/assets/rmbg/js-removebg-preview.png",
    name: "javascript",
  },
  {
    src: "./src/assets/rmbg/node-removebg-preview.png",
    name: "node js",
  },
  {
    src: "./src/assets/rmbg/express-removebg-preview.png",
    name: "express",
  },
  {
      src: "./src/assets/rmbg/react-removebg-preview.png",
    name: "react",
  },
  {
    src: "./src/assets/rmbg/tailwind-removebg-preview.png",
    name: "tailwind",
  },
  {
    src: "./src/assets/rmbg/git-removebg-preview.png",
    name: "git",
  },
  {
    src: "./src/assets/rmbg/canva-removebg-preview.png",
    name: "canva",
  },
  {
    src: "./src/assets/rmbg/SQL-removebg-preview.png",
    name: "SQL",
  },
  {
    src: "./src/assets/rmbg/mongoDB-removebg-preview.png",
    name: "MongoDB",
  },
  {
    src: "./src/assets/rmbg/docker-removebg-preview.png",
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

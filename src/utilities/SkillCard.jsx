const SkillList = [
  {
    src: "/Public/assests/rmbg/html-removebg-preview.png",
    name: "HTML",
  },
  {
    src: "/Public/assests/rmbg/css-removebg-preview.png",
    name: "css",
  },
  {
       src: "/Public/assests/rmbg/js-removebg-preview.png",
    name: "javascript",
  },
  {
    src: "/Public/assests/rmbg/node-removebg-preview.png",
    name: "node js",
  },
  {
    src: "/Public/assests/rmbg/express-removebg-preview.png",
    name: "express",
  },
  {
      src: "/Public/assests/rmbg/react-removebg-preview.png",
    name: "react",
  },
  {
    src: "/Public/assests/rmbg/tailwind-removebg-preview.png",
    name: "tailwind",
  },
  {
    src: "/Public/assests/rmbg/git-removebg-preview.png",
    name: "git",
  },
  {
    src: "/Public/assests/rmbg/canva-removebg-preview.png",
    name: "canva",
  },
  {
    src: "/Public/assests/rmbg/SQL-removebg-preview.png",
    name: "SQL",
  },
  {
    src: "/Public/assests/rmbg/mongoDB-removebg-preview.png",
    name: "MongoDB",
  },
  {
    src: "/Public/assests/rmbg/docker-removebg-preview.png",
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

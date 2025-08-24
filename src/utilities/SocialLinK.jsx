let SocialLinkData = [
  {
    key: 1,
    src: " https://th.bing.com/th/id/OIP.tIb9b1mnX6y4CR5YxwqL8AHaHw?w=165&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    name: 'Github',
    href:'https://github.com/harshit24saxena'
  },
  {
    key:2,
    src: " https://www.bing.com/th/id/OIP.GkLB-mM207aOg96ZtU7BawHaHa?w=196&h=211&c=8&rs=1&qlt=70&o=7&cb=iavawebp1&dpr=1.3&pid=3.1&rm=3",
    name: 'Linkdin',
    href:''
  },
];
const SocialLinK = () => {
  

  return(
  <>
    {SocialLinkData.map((item) => {

      return(
      <a href={item.href} key={item.key} className="hover:border-(--headingTextColor) hover:shadow-xl/40 hover:shadow-blue-950 hover:ring flex gap-3 rounded-2xl border border-(--paraTextColor) h-fit w-fit items-center ">
        <img className="w-8 h-8 pl-1 rounded-2xl" src={item.src} alt="" />
        <p className="pr-2">{item.name}</p>
      </a>)
    })}
  </>)
}

export default SocialLinK;

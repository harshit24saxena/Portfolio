const Navbar = () => {

  const toggleMenu = () => {
    const MenuDisplayStatus = document.querySelector("#menuCard");
    if (!MenuDisplayStatus.classList.contains("hidden")) {
      MenuDisplayStatus.classList.add("hidden");
    } else {
      MenuDisplayStatus.classList.remove("hidden");
    }
  }


  return (
    <navbar className="flex justify-between m-3 text-(--headingTextColor)">
      <h3 className="m-3 text-nowrap font-bold">Harshit Saxena</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 my-auto sm:hidden"
        onClick={toggleMenu}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
        
      </svg>

      <div id="menuCard" className="hidden md:block absolute md:static top-10 right-0 ">
        <div className="flex flex-col m-2 sm:flex-row sm:gap-3">
        <a className="navLinkHover hover:shadow-xl/40 hover:shadow-blue-950" href="#AboutMe">AboutMe</a>
        <a className="navLinkHover hover:shadow-xl/40 hover:shadow-blue-950" href="#Project">Project</a>
        <a className="navLinkHover hover:shadow-xl/40 hover:shadow-blue-950 " href="#Contact">Contact</a>
        </div>
      </div>
    </navbar>
  );
};

export default Navbar;

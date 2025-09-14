
import HeroSection from "./HeroSection"

const Header = () => {

  return (
    <div className="loadingAnimation text-(--headingTextColor) mx-5 my-6 ">
      <h1 className="text-6xl font-light italic mb-2">MERN-Stack</h1>
      <h1 className="mb-10 md:mb-1 text-5xl sm:text-6xl">WEBSITE DEVELOPER</h1>
      <HeroSection />
    </div>
  )
}

export default Header

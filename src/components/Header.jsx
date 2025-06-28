
import HeroSection from "./HeroSection"

const Header = () => {
  return (
    <div className="text-(--headingTextColor) mx-5 my-6">
      <h1 className="text-6xl font-light italic mb-2">Full-Stack</h1>
      <h1 className="text-5xl sm:text-6xl">WEBSITE DEVELOPER</h1>
      <HeroSection />
    </div>
  )
}

export default Header

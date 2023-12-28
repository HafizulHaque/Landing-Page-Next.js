import Hero from "../Hero/Hero"
import HorizontalScroll from "../HorizontalScroll/HorizontalScroll"
import Navbar from "../Navbar/Navbar"

const Header = () => {
  return (
    <header className="bg-gradient-to-br from-customNavy via-customNavy to-customViolet w-100 text-white">
      <Navbar/>
      <div className="max-w-screen-lg mx-auto p-4">
        <Hero/>
      </div>
      <HorizontalScroll/>
    </header>
  )
}

export default Header
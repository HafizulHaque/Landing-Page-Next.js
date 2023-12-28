import Hero from "../Hero/Hero"
import Navbar from "../Navbar/Navbar"
import CustomMarquee from '../Marquee/CustomMarquee'

const Header = () => {
  return (
    <header className="bg-gradient-to-br from-customNavy via-customNavy to-customViolet w-100 text-white relative">
      <img className="absolute bottom-0 right-0" src="./net.svg" alt="design"/>
      <Navbar/>
      <div className="max-w-screen-lg mx-auto p-4">
        <Hero/>
      </div>
      {/* <HorizontalScroll/>
       */}
       <CustomMarquee/>
    </header>
  )
}

export default Header
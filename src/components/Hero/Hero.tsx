"use client"

import Button from "../UI/Button/Button"
import Stat from "../UI/Stat/Stat"

const Hero = () => {
  return (
    <div className="lg:mt-[100px]  lg:flex lg:items-center lg:space-x-32">
      <div className="lg:w-3/5 lg:flex items-center mb-4 lg:mb-16 mt-36 lg:mt-16">
        <div>
          <h1 className="text-4xl xl:text-5xl font-medium lg:font-medium tracking-wide leading-9 lg:leading-7 py-6 xl:py-4">Empowering Trades with Our Capital 🔥</h1>
          <p 
            className="tracking-tight lg:tracking-normal leading-6 lg:leading-7 pb-12 lg:pb-16" 
            style={{wordSpacing: '.2em'}}>
            Global Reach, Local Support: Funding Your Trading <br className="hidden lg:inline"/>Dreams Up to $300,000
          </p>
          <Button text="Get up to $300,000 funds 🙌" onClick={() => {}}/>
          <div className="flex justify-between items-center lg:space-x-6 py-12 lg:py-16">
            <Stat count="195+" text={['Countries', 'Covered']}/>
            <img src="./devider.svg" alt="divider"/>
            <Stat count="$51M+" text={['Total', 'Payout']}/>
            <img src="./devider.svg" alt="divider"/>
            <Stat count="151k+" text={['Funded', 'Traders']}/>
          </div>
        </div>
      </div>
      <div className="lg:w-2/5 mx-12">
        <div className="relative">
          <img 
            src="./confetti.svg" 
            alt="confetti" 
            className="w-8 h-8 absolute top-[-16px] left-[-16px] z-30"/>
          <img 
            src="./brandPromoter.svg" 
            alt="emi" 
            className="w-72 absolute top-[-10%] right-[-40%] lg:right-[-40%] z-30 md:inline"/>
          <img 
            src="./play-button.svg" 
            alt="play button" 
            className="w-32 lg:w-48 absolute top-[9%] lg:top-[5%] left-[-24%] lg:left-[-28%] hover:cursor-pointer z-20"/>
          <img className="rounded-3xl w-100" src="./emiliano.png" alt="emi" />
        </div>
      </div>
    </div>
  )
}

export default Hero
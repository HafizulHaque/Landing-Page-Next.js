"use client"

import Button from "../Button/Button"
import Stat from "../Stat/Stat"

const Hero = () => {
  return (
    <div className="lg:mt-[100px] block lg:flex lg:items-center lg:space-x-32">
      <div className="lg:w-3/5 lg:flex items-center mb-4 lg:mb-16 mt-16">
        <div>
          <h1 className="text-3xl xl:text-4xl font-bold lg:font-bold tracking-wide leading-tight py-4 xl:py-8">Empowering Trades with Our Capital 🔥</h1>
          <p 
            className="tracking-tight lg:tracking-normal leading-5 lg:leading-7 pb-8 lg:pb-5" 
            style={{wordSpacing: '.2em'}}>
            Global Reach, Local Support: Funding Your Trading <br className="hidden lg:inline"/>Dreams Up to $300,000
          </p>
          <Button text="Get up to $300,000 funds 🙌" onClick={() => {}}/>
          <div className="block lg:flex flex-row lg:gap-x-6 py-12 lg:py-16">
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
            height={32}
            width={32}
            className="absolute top-[-16px] left-[-16px] z-30"/>
          <img 
            src="./brandPromoter.svg" 
            alt="emi" 
            className="absolute top-[-10%] right-[-35%] lg:right-[-40%] z-30 md:inline"/>
          <img 
            src="./play-button.svg" 
            alt="play button" 
            className="absolute top-[5%] left-[-32%] hover:cursor-pointer z-20"/>
          <img className="rounded-3xl" src="./emiliano.png" alt="emi" />
        </div>
      </div>
    </div>
  )
}

export default Hero
"use client"

import Button from "../Button/Button"
import Stat from "../Stat/Stat"

const Hero = () => {
  return (
    <div className="mt-[100px] flex items-center space-x-32">
      <div className="w-3/5 flex items-center my-16">
        <div>
          <h1 className="text-5xl font-semibold tracking-wide leading-tight py-8">Empowering Trades with Our Capital 🔥</h1>
          <p className="tracking-normal leading-7 pb-5" style={{wordSpacing: '.2em'}}>Global Reach, Local Support: Funding Your Trading <br/>Dreams Up to $300,000</p>
          <Button text="Get up to $300,000 funds 🙌" onClick={() => {}}/>
          <div className="flex-row flex gap-x-6 py-16">
            <Stat count="195+" text={['Countries', 'Covered']}/>
            <img src="./devider.svg" alt="divider"/>
            <Stat count="$51M+" text={['Total', 'Payout']}/>
            <img src="./devider.svg" alt="divider"/>
            <Stat count="151k+" text={['Funded', 'Traders']}/>
          </div>
        </div>
      </div>
      <div className="w-2/5">
        <div className="relative">
          <img 
            src="./confetti.svg" 
            alt="confetti" 
            height={32}
            width={32}
            className="absolute top-[-16px] left-[-16px]"/>
          <img 
            src="./brandPromoter.svg" 
            alt="emi" 
            className="absolute top-[-10%] right-[-40%] hidden md:inline"/>
          <img 
            src="./play-button.svg" 
            alt="play button" 
            className="absolute top-[5%] left-[-32%] hover:cursor-pointer"/>
          <img  className="rounded-3xl" src="./emiliano.png" alt="emi" />
        </div>
      </div>
    </div>
  )
}

export default Hero
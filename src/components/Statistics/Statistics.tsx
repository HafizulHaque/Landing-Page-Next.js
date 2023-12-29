'use client'

import Button from "../Button/Button"

const Statistics = () => {
  return (
    <section className="bg-white overflow-x-hidden">
      <div className="max-w-screen-lg mx-auto p-4 py-16 lg:pt-16 lg:pb-48 relative">
        <img src="./union-2.svg" alt="design" className="absolute top-0 right-[-120%] lg:right-[-50px] z-0"/>
        <img src="./union-3.svg" alt="design" className="absolute bottom-[16px] left-[-120%] lg:left-[-128px] z-0"/>
        <div className="lg:flex lg:items-center lg:space-x-4">
          <div className="lg:w-4/7">
            <h2 className="text-2xl xl:text-4xl font-semibold tracking-wide leading-tight py-4 xl:py-8">Introducing FundedNext Stellar Challenge 🙌</h2>
            <ul className="pb-6 list-none">
              <li className="py-2 flex items-center">
                <div 
                  className="w-3 h-3 bg-cover bg-no-repeat bg-center mr-2" 
                  style={{backgroundImage: `url('./asterk.svg')`}}></div>
                  No Time Limit
              </li>
              <li className="py-2 flex items-center">
                <div 
                  className="w-3 h-3 bg-cover bg-no-repeat bg-center mr-2" 
                  style={{backgroundImage: `url('./asterk.svg')`}}></div>
                  Balance Based Drawdown
              </li>
              <li className="py-2 flex items-center">
                <div 
                  className="w-3 h-3 bg-cover bg-no-repeat bg-center mr-2" 
                  style={{backgroundImage: `url('./asterk.svg')`}}></div>
                  15% Profit Share from Challenge Phase
              </li>
            </ul>
            <Button text="Learn More" onClick={() => {}}/>
          </div>
          <div className="lg:w-3/7">
            <div>
              <img src="./stats.svg" alt="statistics"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statistics
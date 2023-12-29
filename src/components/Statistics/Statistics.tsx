'use client'

import Button from "../Button/Button"

const Statistics = () => {
  return (
    <section className="max-w-screen-lg mx-auto p-4 py-32">
      <div className="flex items-center space-x-4">
        <div className="w-4/7">
          <h2 className="text-4xl font-semibold tracking-wide leading-tight py-4">Introducing FundedNext Stellar Challenge 🙌</h2>
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
        <div className="w-3/7">
          <div>
            <img src="./stats.svg" alt="statistics"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statistics
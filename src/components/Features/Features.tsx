import Feature from "../Feature/Feature"

const dataArray = [
  {image: 'icon-1.svg', heading: '15% Profit Sharing from Challenge Phase', details: 'FundedNext is the only prop firm to offer a 15% profit sharing from the profit you make', isPrimary: true},
  {image: 'icon-2.svg', heading: 'Balance Drawdown Performance Overview', details: 'Daily drawdown uses balance, not equity, for utmost prop firm reliability.', isPrimary: false},
  {image: 'icon-3.svg', heading: 'Competitive Low Commission Rates', details: 'FundedNext offers raw spread with Swap Free: World\'s best prop trading conditions.', isPrimary: false},
  {image: 'icon-4.svg', heading: 'No Time Limit on Challenge Phase', details: 'Daily drawdown uses balance, not equity, for utmost prop firm reliability.', isPrimary: false}
]

const Features = () => {
  return (
    <section className="bg-offWhite overflow-x-hidden px-2 lg:px-0">
      <div className="max-w-screen-lg mx-auto p-4 py-16 lg:py-32 relative">
        <img src="./union-1.svg" alt="design" className="absolute left-[-120%] lg:left-[-100px] bottom-[50px] z-0"/>
        <div className="block lg:flex lg:items-center lg:space-x-8">
          <div className="lg:w-1/2">
            <div>
              <h2 className="text-2xl xl:text-4xl font-semibold tracking-wide leading-tight py-2">What Makes FundedNext Different?</h2>
              <p className="tracking-tight lg:tracking-normal leading-5 lg:leading-7 pb-8" style={{wordSpacing: '.2em'}}>FundedNext offers no time limits in its funding challenges.</p>
              <div className="flex items-center">
                <div className="overflow-x-hidden lg:relative">
                  <img 
                    src="./profiles.svg" 
                    alt="profiles" 
                    className="w-36 relative left-[-24px]"/>
                </div>
                <div className="relative bottom-[4px] left-[-16px]">
                  <h3 className="text-md font-medium">Our Happy Traders</h3>
                  <p className="flex items-center">
                    <img src="./star.svg" alt="star" className="w-6"/>
                    <span className="inline-block align-middle leading-none mx-1">4.9</span>
                    (1.5k Reviews)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 p-8 lg:p-0">
              {dataArray.map((item, index) => (
                <div 
                  key={index} 
                  className={`${index%2 === 0 ? 'relative lg:top-[-26px]':''} px-4 lg:px-0`}>
                  <Feature {...item}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
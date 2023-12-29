import Feature from "../Feature/Feature"

const dataArray = [
  {image: 'icon-1.svg', heading: '15% Profit Sharing from Challenge Phase', details: 'FundedNext is the only prop firm to offer a 15% profit sharing from the profit you make', isPrimary: true},
  {image: 'icon-2.svg', heading: 'Balance Drawdown Performance Overview', details: 'Daily drawdown uses balance, not equity, for utmost prop firm reliability.', isPrimary: false},
  {image: 'icon-3.svg', heading: 'Competitive Low Commission Rates', details: 'FundedNext offers raw spread with Swap Free: World\'s best prop trading conditions.', isPrimary: false},
  {image: 'icon-4.svg', heading: 'No Time Limit on Challenge Phase', details: 'Daily drawdown uses balance, not equity, for utmost prop firm reliability.', isPrimary: false}
]

const Features = () => {
  return (
    <section className="bg-offWhite overflow-x-hidden">
      <div className="max-w-screen-lg mx-auto p-4 py-32">
        <div className="flex items-center space-x-8">
          <div className="w-1/2">
            <div>
              <h2 className="text-4xl font-semibold tracking-wide leading-tight py-4">What Makes FundedNext Different?</h2>
              <p className="tracking-normal leading-7 pb-3" style={{wordSpacing: '.2em'}}>FundedNext offers no time limits in its funding challenges.</p>
              <div className="flex items-center">
                <div className="overflow-x-hidden relative">
                  <img 
                    src="./profiles.svg" 
                    alt="profiles" 
                    width={180}
                    className="relative left-[-30px]"/>
                </div>
                <div className="text-sm">
                  <h3 className="font-medium">Our Happy Traders</h3>
                  <p className="flex items-center">
                    <img src="./star.svg" alt="star" width={18}/>
                    <span className="inline-block align-middle leading-none mx-1">4.9</span>
                    (1.5k Reviews)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="grid grid-cols-2 gap-4">
              {dataArray.map((item, index) => (
                <div key={index}>
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
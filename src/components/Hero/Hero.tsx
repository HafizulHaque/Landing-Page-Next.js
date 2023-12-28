import Button from "../Button/Button"

const Hero = () => {
  return (
    <div className="mt-[100px] flex align-items-center">
      <div className="w-3/5 flex items-center">
        <div className="">
          <h1>Empowering Trades with Our Capital 🔥</h1>
          <p>Global Reach, Local Support: Funding Your Trading Dreams Up to $300,000</p>
          <Button/>
        </div>
      </div>
      <div className="w-2/5">
        <div className="img-container">
          <img src="./emiliano.png" alt="emi" />
        </div>
      </div>
    </div>
  )
}

export default Hero
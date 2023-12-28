import Feature from "../Feature/Feature"

const Features = () => {
  return (
    <section className="max-w-screen-lg mx-auto p-4">
      <div className="flex align-items-center gap-4">
        <div className="w-1/2">
          <div>
            <h2>What Makes FundedNext Different?</h2>
            <p>FundedNext offers no time limits in its funding challenges.</p>
            <div>
              <div>
                <img src="./profiles.svg" alt="profiles" />
              </div>
              <div>
                <h3>Our Happy Traders</h3>
                <p><img src="./star.svg" alt="star"/><span>4.9</span>(1.5k Reviews)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div>
            <Feature/>
            <Feature/>
            <Feature/>
            <Feature/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
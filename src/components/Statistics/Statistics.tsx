import Button from "../Button/Button"

const Statistics = () => {
  return (
    <section className="max-w-screen-lg mx-auto p-4">
      <div className="flex align-items-center gap-4">
        <div className="w-1/2">
          <h2>Introducing FundedNext Stellar Challenge 🙌</h2>
          <ul>
            <li>No Time Limit</li>
            <li>Balance Based Drawdown</li>
            <li>15% Profit Share from Challenge Phase</li>
          </ul>
          <Button/>
        </div>
        <div className="w-1/2">
          <div>
            <img src="./stats.svg" alt="statistics"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statistics
type PropTypes = {
  count: string,
  text: string[]
}

const Stat = ({ count, text }: PropTypes) => {
  return (
    <div className="lg:flex lg:gap-x-4 lg:items-center">
      <h4 className="text-2xl font-medium">{count}</h4>
      <span className="text-normal font-thin tracking-wide leading-none">{text[0]}<br/>{text[1]}</span>
    </div>
  )
}

export default Stat
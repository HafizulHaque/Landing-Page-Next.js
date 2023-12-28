type PropTypes = {
  count: string,
  text: string[]
}

const Stat = ({ count, text }: PropTypes) => {
  return (
    <div className="flex flex-row gap-x-2 items-center">
      <h4 className=" text-3xl font-semibold">{count}</h4>
      <span className="text-xs font-thin tracking-wide">{text[0]}<br/>{text[1]}</span>
    </div>
  )
}

export default Stat
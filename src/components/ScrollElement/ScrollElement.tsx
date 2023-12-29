type PropTypes = {
  country1: string,
  currency1: string,
  country2: string,
  currency2: string,
  currentRate: string, 
  rateChange: string, 
  changePercentage: string
}

const isPositive = (str: string): boolean => {
  let val = +str;
  return val > 0;
}

const ScrollElement = (data: PropTypes) => {
  return (
    <div className="flex gap-x-3 items-center pl-3 pr-5 border-r text-sm tracking-tight">
      <div className="flex relative">
        <img 
          className='relative left-[25%] top-[3px]' 
          src={`./${data.country1}.png`} 
          alt="flags"  
          width={20} 
          height={20}/>   
        <img 
          className='relative left-0 top-[-3px]' 
          src={`./${data.country2}.png`} 
          alt="flags"  
          width={20} 
          height={20}/>
      </div>
      <p>{data.currency1+data.currency2}</p>
      <p>{data.currentRate}</p>
      <p className={isPositive(data.rateChange)?'text-teal-300':'text-red-300'}>{data.rateChange}</p>
      <p className={isPositive(data.changePercentage)?'text-teal-300':'text-red-300'}>({data.changePercentage}%)</p>
    </div>
  )
}

export default ScrollElement
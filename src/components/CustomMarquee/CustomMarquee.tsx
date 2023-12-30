import Marquee from 'react-fast-marquee'
import ScrollElement from '../UI/ScrollElement/ScrollElement';

const dataArray = [
  { country1: 'bangladesh', currency1: 'BDT', country2: 'japan', currency2: 'JPY', currentRate: '+0.1234', rateChange: '+0.5678', changePercentage: '+12.34' },
  { country1: 'australia', currency1: 'AUD', country2: 'singapore', currency2: 'SGD', currentRate: '-0.4321', rateChange: '-0.8765', changePercentage: '-23.45' },
  { country1: 'india', currency1: 'INR', country2: 'switzerland', currency2: 'CHF', currentRate: '+0.9876', rateChange: '+0.5432', changePercentage: '+34.56' },
  { country1: 'bangladesh', currency1: 'BDT', country2: 'japan', currency2: 'JPY', currentRate: '-0.2468', rateChange: '-0.1357', changePercentage: '-45.67' },
  { country1: 'australia', currency1: 'AUD', country2: 'singapore', currency2: 'SGD', currentRate: '+0.8765', rateChange: '+0.9876', changePercentage: '+56.78' },
  { country1: 'india', currency1: 'INR', country2: 'switzerland', currency2: 'CHF', currentRate: '-0.5432', rateChange: '-0.6789', changePercentage: '-67.89' },
  { country1: 'bangladesh', currency1: 'BDT', country2: 'japan', currency2: 'JPY', currentRate: '+0.2345', rateChange: '+0.8765', changePercentage: '+78.90' },
  { country1: 'australia', currency1: 'AUD', country2: 'singapore', currency2: 'SGD', currentRate: '-0.7890', rateChange: '-0.9876', changePercentage: '-89.01' },
  { country1: 'india', currency1: 'INR', country2: 'switzerland', currency2: 'CHF', currentRate: '+0.6543', rateChange: '+0.1234', changePercentage: '+90.12' },
  { country1: 'bangladesh', currency1: 'BDT', country2: 'japan', currency2: 'JPY', currentRate: '-0.3210', rateChange: '-0.6543', changePercentage: '-1.23' },
  { country1: 'australia', currency1: 'AUD', country2: 'singapore', currency2: 'SGD', currentRate: '+0.5432', rateChange: '+0.7654', changePercentage: '+2.34' },
  { country1: 'india', currency1: 'INR', country2: 'switzerland', currency2: 'CHF', currentRate: '-0.8765', rateChange: '-0.4321', changePercentage: '-3.45' },
  { country1: 'bangladesh', currency1: 'BDT', country2: 'japan', currency2: 'JPY', currentRate: '+0.1098', rateChange: '+0.5432', changePercentage: '+4.56' },
  { country1: 'australia', currency1: 'AUD', country2: 'singapore', currency2: 'SGD', currentRate: '-0.9876', rateChange: '-0.8765', changePercentage: '-5.67' },
  { country1: 'india', currency1: 'INR', country2: 'switzerland', currency2: 'CHF', currentRate: '+0.4321', rateChange: '+0.3210', changePercentage: '+6.78' },
  { country1: 'bangladesh', currency1: 'BDT', country2: 'japan', currency2: 'JPY', currentRate: '-0.7654', rateChange: '-0.1098', changePercentage: '-7.89' },
  { country1: 'australia', currency1: 'AUD', country2: 'singapore', currency2: 'SGD', currentRate: '+0.3210', rateChange: '+0.6543', changePercentage: '+8.90' },
];

const CustomMarquee = () => {
  return (
    <Marquee className='bg-primaryButtonColor py-2'>
      {dataArray.map((dataItem, index) => (<ScrollElement {...dataItem} key={index}/>))}
    </Marquee>
  )
}

export default CustomMarquee
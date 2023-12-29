'use client'
import { useEffect, useRef } from "react"

type PropsType = {
  image: string,
  heading: string,
  details: string,
  isPrimary?: boolean
}

const Feature = (data: PropsType) => {

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const width = ref?.current?.offsetWidth
    if(ref.current !== null){
      ref.current.style.height = `${width}px`;
    }
  })

  return (
    <div 
      className={`${data.isPrimary ? 'bg-gradient-to-r from-primaryButtonColor to-pink text-white' : 'bg-white text-black'} p-4 w-100 h-100 rounded-2xl relative`}
      ref={ref}>
      <img 
        className="absolute top-0 right-0" 
        src={data.isPrimary ? "./feature-grid-background.svg" : "./feature-grid-background-2.svg"}
        alt="background"/>
      <div className="my-2">
        <img src={`./${data.image}`} alt="icon" height={32} width={32}/>
      </div>
      <h3 className="text-base font-semibold leading-4 py-3">{data.heading}</h3>
      <p className="text-sm line-clamp-3">{data.details}</p>
    </div>
  )
}

export default Feature
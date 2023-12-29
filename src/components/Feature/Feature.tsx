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
        <img className="h-12 w-12" src={`./${data.image}`} alt="icon"/>
      </div>
      <h3 className="text-2xl lg:text-base font-bold lg:font-semibold leading-7 lg:leading-4 py-3">{data.heading}</h3>
      <p className="lg:text-sm lg:line-clamp-3">{data.details}</p>
    </div>
  )
}

export default Feature
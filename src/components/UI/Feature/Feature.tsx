'use client'

import { useEffect, useState, useRef, RefObject } from "react"

type PropsType = {
  image: string,
  heading: string,
  details: string,
  isPrimary?: boolean
}

const Feature = (data: PropsType) => {

  const ref: RefObject<HTMLDivElement> = useRef(null)
  const [height, setHeight] = useState<number>(0);

  const determineHeight = () => {
    if(ref.current){
      setHeight(ref.current.offsetWidth);
    }
  };

  useEffect(() => {
    if(typeof window !== 'undefined'){
      determineHeight()
      window.addEventListener('resize', determineHeight);
      return () => {
        window.removeEventListener('resize', determineHeight);
      };
    }
  }, []);

  return (
    <div 
      className={`${data.isPrimary ? 'bg-gradient-to-r from-primaryButtonColor to-pink text-white' : 'bg-white text-black'} p-4 w-100 rounded-2xl overflow-y-hidden relative`}
      style={{height: `${height}px`}}
      ref={ref}>
      <img 
        className="absolute top-0 right-0" 
        src={data.isPrimary ? "./feature-grid-background.svg" : "./feature-grid-background-2.svg"}
        alt="background"/>
      <div className="my-2">
        <img className="h-12 w-12" src={`./${data.image}`} alt="icon"/>
      </div>
      <h3 className="text-2xl lg:text-base font-bold lg:font-semibold leading-7 lg:leading-4 py-3">{data.heading}</h3>
      <p className="lg:text-sm lg:line-clamp-3 text-ellipsis">{data.details}</p>
    </div>
  )
}

export default Feature
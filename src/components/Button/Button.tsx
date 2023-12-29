import { ReactNode } from "react"

type PropTypes = {
  text: string,
  type?: 'primary' | 'secondary',
  size?: 'lg' | 'md' | 'sm',
  variant?: 'outlined' | 'filled',
  rounded?: 'none' | 'rounded' | 'pill',
  onClick: () => void,
  children?: ReactNode
}

const Button = ({ text, type, size, variant, rounded, onClick, children }: PropTypes) => {
  return (
    <button 
      className={`${type === 'secondary' ? 'secondaryButtonColor text-black' : 'bg-primaryButtonColor text-white'} px-4 py-2 rounded-md`}
      onClick={onClick}>
      {children ? children : text}
    </button>
  )
}

export default Button
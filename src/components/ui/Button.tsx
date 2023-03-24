import { PropsWithChildren } from "react"

import SvgArrow from "./Arrow"

type ButtonProps = {
  showArrow? : boolean
} & PropsWithChildren

const Button = (props: ButtonProps) => {
  const { children, showArrow = true } = props
  return (
    <button className='py-4 px-7 border border-slate-600 flex items-center font-semibold'>
    {children}{showArrow && <SvgArrow className="ml-4" />}
    </button>
  )
}

export default Button

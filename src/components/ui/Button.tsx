import SvgArrow from "./Arrow"

const Button = ({ children }) => {
  return (
    <button className='py-4 px-7 border border-slate-600 flex items-center font-semibold'>
    {children}<SvgArrow className="ml-4" />
    </button>
  )
}

export default Button

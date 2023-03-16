import SvgArrow from "./Arrow"

const Button = () => {
  return <button className='py-4 px-7 border border-slate-600 flex items-center font-semibold'>
    SERVICES
    <SvgArrow className="ml-4" />
    </button>
}

export default Button

import * as React from 'react'

const SvgArrow = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={45}
      height={22}
      viewBox="0 0 40 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      {...props}
    >
      <path
        d="M1 10L25 10"
        stroke="#000000"
        strokeWidth="1.5px"
        strokeMiterlimit={10}
        style={{ transform: 'scaleX(1.5)' }}
        fill="none"
      />
      <path
        d="M18 20C18 14.6581 22.48 10.3226 28 10.3226V9.67742C22.48 9.67742 18 5.34194 18 0"
        stroke="#000000"
        strokeWidth="1.5px"
        strokeMiterlimit={10}
        className="transition-transform duration-500"
        style={{ transform: 'translateX(10px)' }}
        fill="none"
      />
    </svg>
  )
}

export default SvgArrow

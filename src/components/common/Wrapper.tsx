import clsx from 'clsx'
import { HTMLAttributes, PropsWithChildren } from 'react'

type WrapperProps = PropsWithChildren & HTMLAttributes<HTMLDivElement> & {}

const Wrapper = (props: WrapperProps) => {
  const { children, className } = props
  const wrapperClassName = clsx('container mx-auto py-10 px-16', className)

  return <div className={wrapperClassName}>{children}</div>
}

export default Wrapper

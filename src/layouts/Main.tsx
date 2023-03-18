import { PropsWithChildren, useState } from 'react'
import clsx from 'clsx'
import Navigation from '@/components/common/Navigation'
import Footer from './Footer'

type MainProps = PropsWithChildren<{}>

const Main = (props: MainProps) => {
  const { children } = props
  const [ navbar, setNavbar ] = useState (false)
  const childrenWrapperclasses = clsx(
    navbar && 'scale-[0.5] z-30 top-0 left-0 fixed bg-white'
  )

  return (
    <div>
      <Navigation navbar={navbar} setNavbar={setNavbar} />
      <main className={childrenWrapperclasses}>{children}</main>
      <Footer />
    </div>
  )
}

export default Main

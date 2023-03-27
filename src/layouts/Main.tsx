import clsx from 'clsx'
import { PropsWithChildren, useState } from 'react'

import Footer from '@/components/common/Footer'
import Navigation from '@/components/common/Navigation'

type MainProps = PropsWithChildren<{}>

const Main = (props: MainProps) => {
  const { children } = props
  const [navbar, setNavbar] = useState(false)
  const childrenWrapperclasses = clsx(
    navbar &&
      'max-md:scale-0 scale-[0.4] z-30 top-0 -left-40 fixed bg-white w-screen h-screen overflow-hidden snap-mandatory snap-y',
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

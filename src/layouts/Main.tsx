import { PropsWithChildren } from 'react'

import Navigation from '@/components/common/Navigation'

type MainProps = PropsWithChildren<{}>

const Main = (props: MainProps) => {
  const { children } = props
  return (
    <div>
      <Navigation />
      <div>{children}</div>
    </div>
  )
}

export default Main

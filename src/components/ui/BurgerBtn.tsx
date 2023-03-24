import clsx from 'clsx'

type BurguerBtnProps = {
  navbar: boolean
  toggleNavbar: () => void
}

const BurguerBtn = ({ toggleNavbar, navbar }: BurguerBtnProps) => {
  const burguerClasses = clsx('nav-icon', navbar && 'open')
  return (
    <div onClick={toggleNavbar} className={burguerClasses}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default BurguerBtn

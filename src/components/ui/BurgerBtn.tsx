import clsx from 'clsx'

type BurgerBtnProps = {
  navbar: boolean
  toggleNavbar: () => void
}

const BurgerBtn = ({ toggleNavbar, navbar }: BurgerBtnProps) => {
  const burgerClasses = clsx('nav-icon', navbar && 'open')
  return (
    <div onClick={toggleNavbar} className={burgerClasses}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default BurgerBtn

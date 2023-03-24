import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import logoSietch from '@/assets/img/sietch-logo.png'
import BurgerBtn from '@/components/ui/BurgerBtn'

type NavigationProps = {
  navbar: boolean
  setNavbar: (navbar: boolean) => void
}

const Navigation = (props: NavigationProps) => {
  const { navbar, setNavbar } = props
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    const scrollListener: EventListener = () => {
      setShowMenu(window.pageYOffset > 100)
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  const toggleNavbar = () => {
    setNavbar(!navbar)
  }

  const linksWrapperClasses = clsx(
    'uppercase absolute top-[-60px] md:relative md:top-0 align-middle text-ui-black',
    navbar &&
      'capitalize fixed flex flex-col flex-nowrap top-[0] right-0 pl-10 pt-[23vh] text-6xl bg-ui-black text-ui-white h-screen w-screen md:bg-inherit md:text-inherit md:flex-row md:text-base md:uppercase md:static md:h-0 md:p-0 md:flex md:items-center md:justify-end z-0',
  )

  const sidebarClasses = clsx(navbar ? 'text-base pl-6 pt-16 md:hidden' : 'hidden')
  const burgerBtnClasses = clsx(
    'flex fixed right-6 text-ui-black transition-opacity',
    showMenu ? 'opacity-100' : 'opacity-0',
    navbar && 'text-ui-white z-10 mr-3',
  )

  return (
    <div className="bg-gradient-to-b from-[#D8E6F566] to-[#D8E6F566]">
      <nav className="flex justify-between container m-auto py-10 items-center max-sm:py-5 bg-fixed">
        <Link to="/" className="flex items-center">
          <img src={logoSietch} alt="SietchLogo" className="h-10 max-sm:ml-8" />
        </Link>

        <div className={linksWrapperClasses}>
          <Link to="/" className="mx-5 max-md:my-2 md:hidden max-md:w-40">
            home
          </Link>
          <Link to="/work" className="mx-5 max-md:my-2 max-md:w-36">
            work
          </Link>
          <Link to="/services" className="mx-5 max-md:my-2 max-md:w-52">
            services
          </Link>
          <Link to="/team" className="mx-5 max-md:my-2 max-md:w-36">
            team
          </Link>
          <Link to="/contact" className="mx-5 max-md:my-2 max-md:w-52">
            contact
          </Link>
          <div className={sidebarClasses}>
            <span className="mr-10 font-bold text-xl tracking-[-1px]">Sietch</span>
            <span className="mr-10 cursor-pointer linkedin">Linkedin</span>
            <span className="mr-10">© 2023</span>
          </div>
        </div>

        <div className={burgerBtnClasses}>
          <span className="mr-4">MENU</span>
          <BurgerBtn navbar={navbar} toggleNavbar={toggleNavbar} />
        </div>
      </nav>
    </div>
  )
}

export default Navigation

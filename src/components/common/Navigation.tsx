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
    'uppercase max-md:absolute max-md:top-[-150px] md:top-0 align-middle text-ui-black py-12 px-10',
    navbar &&
      'capitalize fixed flex flex-col flex-nowrap max-md:top-[0] max-md:right-0 max-md:pl-10 max-md:pt-[23vh] text-6xl bg-ui-black text-ui-white h-screen w-screen md:flex md:items-end md:pr-[10vw] md:justify-center md:pt-0 max-md:top-0',
  )

  const sidebarClasses = clsx(navbar ? 'text-base pl-6 pt-16 md:text-white' : 'hidden')
  const burgerBtnClasses = clsx(
    'flex fixed max-md:right-5 right-11 max-sm:top-8 top-12 text-ui-black',
    showMenu ? '' : 'md:opacity-0 md:z-[-50]',
    navbar && 'max-md:mr-4 text-ui-white md:opacity-100 md:z-[50] md:mr-4',
  )
  const showHomeLink = clsx(
    'ml-10 max-md:ml-5 my-2 max-md:w-40 sb-underline',
    navbar ? '' : 'hidden',
  )

  return (
    <div className="bg-gradient-to-b from-[#EEF3F6] to-[#EEF3F6]">
      <nav className="flex justify-between items-center z-50">
        <Link to="/" className="flex items-center">
          <img src={logoSietch} alt="SietchLogo" className="h-10 max-md:mt-6 ml-12 max-md:ml-5" />
        </Link>

        <div className={linksWrapperClasses}>
          <Link to="/" className={showHomeLink}>
            home
          </Link>
          <Link to="/work" className="ml-10 max-md:ml-5 my-2 max-md:w-36 sb-underline">
            work
          </Link>
          <Link to="/services" className="ml-20 max-md:ml-5 my-2 max-md:w-52 sb-underline">
            services
          </Link>
          <Link to="/team" className="ml-20 max-md:ml-5 my-2 max-md:w-36 sb-underline">
            team
          </Link>
          <Link to="/contact" className="ml-20 max-md:ml-5 my-2 max-md:w-52 sb-underline">
            contact
          </Link>
          <div className={sidebarClasses}>
            <span className="mr-10 font-bold text-xl tracking-[-1px]">Sietch</span>
            <span className="mr-10 cursor-pointer white-underline">Linkedin</span>
            <span>© 2023</span>
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

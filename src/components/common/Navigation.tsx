import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import logoSietch from '@/assets/img/sietch-logo.png'
import BurgerBtn from '@/components/ui/BurgerBtn'
import { Animations } from '@/variants/animations'

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
    'uppercase max-md:absolute max-md:top-[-150px] md:top-0 align-middle text-ui-black py-10 px-10',
    navbar &&
      'capitalize fixed flex flex-col flex-nowrap max-md:top-[0] max-md:right-0 max-md:pl-10 max-md:pt-[23vh] text-6xl bg-ui-black text-ui-white h-screen w-screen md:flex md:items-end md:pr-[10vw] md:justify-center max-md:top-0',
  )

  const sidebarClasses = clsx(navbar ? 'text-base pl-6 pt-16 md:text-white' : 'hidden')
  const burgerBtnClasses = clsx(
    'flex fixed max-md:right-5 right-11 max-sm:top-8 top-10 text-ui-black z-[200]',
    showMenu ? '' : 'md:opacity-0 md:z-[-50]',
    navbar && 'text-ui-white md:opacity-100 md:z-[50] md:mr-4',
  )
  const showHomeLink = clsx(
    'max-md:ml-5 md:ml-20 max-md:w-40 list-none overflow-hidden',
    navbar ? '' : 'hidden',
  )

  return (
    <div className="fixed left-0 top-0 w-full">
      <nav className="flex justify-between items-center z-50">
        <Link to="/" className="flex items-center">
          <img src={logoSietch} alt="SietchLogo" className="h-10 max-md:mt-6 ml-12 max-md:ml-5" />
        </Link>

        <div className={linksWrapperClasses}>
          <motion.div
            variants={Animations.container}
            initial="hidden"
            whileInView="show"
            className={navbar ? 'md:mr-10 text-end' : 'flex'}
          >
            <div className={showHomeLink}>
              <Link to="/">
                <motion.li className="sb-underline my-2 w-40" variants={Animations.item}>
                  home
                </motion.li>
              </Link>
            </div>
            <div className="overflow-hidden md:ml-20 list-none max-md:ml-5 max-md:w-36">
              <Link to="/work">
                <motion.li
                  className={`sb-underline my-2 ${navbar ? 'w-36' : ''}`}
                  variants={Animations.item}
                >
                  work
                </motion.li>
              </Link>
            </div>
            <div className="overflow-hidden md:ml-20 list-none max-md:ml-5 max-md:w-[13.1rem]">
              <Link to="/services">
                <motion.li className="sb-underline my-2" variants={Animations.item}>
                  services
                </motion.li>
              </Link>
            </div>
            <div className="overflow-hidden md:ml-20 list-none max-md:ml-5 max-md:w-36">
              <Link to="/team">
                <motion.li
                  className={`sb-underline my-2 ${navbar ? 'w-36' : ''}`}
                  variants={Animations.item}
                >
                  team
                </motion.li>
              </Link>
            </div>
            <div className="overflow-hidden md:ml-20 list-none max-md:ml-5 max-md:w-52 ">
              <Link to="/contact">
                <motion.li className="sb-underline my-2" variants={Animations.item}>
                  contact
                </motion.li>
              </Link>
            </div>
          </motion.div>

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

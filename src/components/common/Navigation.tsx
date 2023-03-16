import BurguerBtn from '@/components/ui/BurguerBtn'

import logoSietch from '@/assets/img/sietch-logo.png'

const Navigation = (props) => {

  const { navbar, setNavbar } = props

  const toggleNavbar = () => {
    setNavbar(!navbar)
  }

  return (
    <nav className='flex justify-between container m-auto py-10 items-center max-sm:py-5'>
      <div className='flex items-center'>
        <img src={logoSietch} alt="SietchLogo" className='h-10 max-sm:ml-8' />
        {/* <span className='font-extrabold text-3xl ml-5 tracking-[-2px] text-ui-black max-sm:text-2xl'>Sietch</span> */}
      </div>

      <div className={`
      uppercase absolute top-[-60px] md:relative md:top-0 align-middle text-ui-black ${navbar 
        ? 'capitalize fixed flex flex-col flex-nowrap top-[0] right-0 pl-10 pt-[23vh] text-6xl bg-ui-black text-ui-white h-screen w-screen md:bg-inherit md:text-inherit md:flex-row md:text-base md:uppercase md:static md:h-0 md:p-0 md:flex md:items-center md:justify-end z-10' 
        : ''}
      `}>
        <a href="" className='mx-5 max-md:my-2 md:hidden'>home</a>
        <a href="" className='mx-5 max-md:my-2'>work</a>
        <a href="" className='mx-5 max-md:my-2'>services</a>
        <a href="" className='mx-5 max-md:my-2'>team</a>
        <a href="" className='mx-5 max-md:my-2'>contact</a>
        <div className={`${navbar ? 'text-base pl-6 pt-16 md:hidden' : 'hidden'}`}>
          <span className='mr-10 font-bold text-xl tracking-[-1px]'>Sietch</span>
          <span className='mr-10 cursor-pointer linkedin'>Linkedin</span>
          <span className='mr-10'>© 2023</span>
        </div>
      </div>

      <div className={`flex fixed right-6 text-ui-black md:hidden ${navbar ? 'text-ui-white z-10' : ''}`}>
        <span className='mr-4'>MENU</span>
        <BurguerBtn navbar={navbar} toggleNavbar={toggleNavbar} />
      </div>
    </nav>
  )
}

export default Navigation

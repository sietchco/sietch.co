const Footer = () => {
  return (
    <footer className='bg-black text-white text-center pt-44 pb-28 max-md:pt-[8rem] max-md:pb-14 fixed bottom-0 -z-[99] w-full'>
      <h2 className='text-4xl mb-28 max-md:mb-10 max-md:text-2xl'>Let's<span className='ml-2 cursor-pointer linkedin'>build together.</span>
      </h2>
      <div className='text-base pl-6 pt-16'>
          <span className='mr-10 font-bold text-xl tracking-[-1px]'>Sietch</span>
          <span className='mr-10 cursor-pointer linkedin'>Linkedin</span>
          <span className='mr-10'>© 2023</span>
        </div>
    </footer>
  )
}

export default Footer
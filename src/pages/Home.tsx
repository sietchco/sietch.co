import { motion } from 'framer-motion'
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import img from '@/assets/img/image.png'
import america from '@/assets/svg/svg-america.svg'
import Button from '@/components/ui/Button'
import Main from '@/layouts/Main'
import Counter from '@/utils/Counter'
import { Animations } from '@/variants/animations'

import Parallax from '../utils/Parallax'

const Home = () => {
  const [showImage, setShowImage] = useState<boolean>(false)

  return (
    <Main>
      <Helmet>
        <title>Sietch · Software Factory</title>
      </Helmet>
      <div className="bg-ui-white">
        {/* hero section */}
        <section className="bg-gradient-to-b from-[#D8E6F566] to-[#bbd0e63f] h-full">
          <header className="container mx-auto py-10 text-ui-black max-sm:px-6 max-sm:pb-0 lg:px-16 xl:px-64">
            <div className="pt-10 pb-[60px] max-sm:pb-11 snap-center">
              <h3 className="text-2xl pb-4 max-sm:text-lg text-ui-gray">
                Sietch es un compañero digital.
              </h3>
              <h1 className="text-[56px] font-bold leading-[1.2] max-md:text-[33px] max-sm:pt-5 xl:w-[46rem]">
                Te ayudamos a alcanzar tus objetivos tecnológicos, <br /> tus metas son las
                nuestras.
              </h1>
            </div>
            <div className="flex justify-start max-md:pb-20">
              <Link to="/services">
                <Button>SERVICES</Button>
              </Link>
            </div>
            <div className="text-right pb-20 max-sm:pb-28">
              <p className="font-semibold max-sm:text-xl md:pt-24 text-2xl md:ml-72">
                “Sietch no es una agencia, siempre están buscando emprender, como nosotros, y eso es
                difícil de encontrar”
              </p>
              <p className="pt-4 pb-5">
                —Alan Ramirez, Gerente General, <span className="link">ramirezlaw.com</span>
              </p>
              <span className="font-extrabold ml-5 text-xl tracking-[-1px]">ramirezlaw.com</span>
            </div>
          </header>
        </section>

        {/* our story section*/}
        <section>
          <div className="container mx-auto max-sm:px-6 md:px-14 lg:px-16 xl:px-64
          py-10 text-ui-black mt-[9rem] max-sm:mt-20 max-sm:py-0 snap-center grid md:grid-cols-2">
            <div className="text-xl xl:text-[32px] xl:leading-tight">
              <h3 className="text-xl uppercase font-bold mb-9">our story</h3>
                Sietch was founded in 2023 by Paul Díaz, a software engineer and entrepreneur, and
                Ericka Castillo, a venture investor, on the premise that
              <strong className="ml-2">
                entrepreneurs and philanthropists need a better services model for building
                technology.
              </strong>
            </div>
          </div>
        </section>

        {/* the problem section */}
        <section
          className="container mx-auto max-sm:px-6 md:px-14 lg:px-16 xl:px-64">
          {[1,2,3].map((index) => (
            <section key={index} className='snap-center'>
                <Parallax />
            </section>
          ))}
        </section>

        {/* sietch message section with colorful bg */}
        <section className="bg-gradient-to-b from-[#D8E6F566] to-[#bbd0e63f] snap-center">
          <div
            className="container mx-auto max-sm:px-6 md:px-14 lg:px-16 xl:px-64 
          py-20 mt-[9rem] max-sm:mt-24 lg:h-screen lg:w-screen md:flex md:flex-col md:justify-center text-ui-black"
          >
            <h3 className="text-center text-2xl font-bold py-10">Sietch</h3>
            <h2 className="text-4xl text-center lg:text-6xl">
              A new model to help ambitious innovators realize their vision
            </h2>
            <p className="text-center text-xl py-10">
              Our dedicated, startup caliber teams work hand-in-hand with our partners to deliver
              their business goals.
            </p>
          </div>
        </section>

        {/* we the action section */}
        <section
          className="container mx-auto max-sm:px-6 md:px-14 lg:px-16 xl:px-64
        text-ui-black mt-[9rem] max-md:mt-24 grid sm:grid-cols-2 max-md:pt-10 max-md:pb-20 sm:gap-10 xl:gap-40 place-items-center md:pb-[10rem] snap-center"
        >
          <img src={img} />
          <div>
            <h3 className="order-last text-xl uppercase font-bold mb-9 max-md:mt-10">
              we the action
            </h3>
            <div className="text-xl xl:leading-tight max-sm:pb-14 pb-20">
              Over 42,000 lawyers recruited to support more than 500 nonprofits nationwide.
            </div>
            <Button>VIEW CASE STUDY</Button>
          </div>
        </section>

        {/* today section with bg dark and numbers */}
        <section className="text-ui-white bg-today mb-[530px] max-md:mb-[340px] snap-center">
          <motion.div
          variants={Animations.bgdark} initial='hidden' animate='visible'
          onAnimationComplete={() => setShowImage(true)}
          className='absolute bg-black h-full w-full'></motion.div>
          <div className="container mx-auto max-sm:px-6 md:px-14 lg:px-16 xl:px-64 py-40 max-sm:pb-28 xl:pt-64 overflow-hidden">
            <div className="grid grid-cols-2 place-items-center gap-72 relative max-lg:gap-10 max-sm:grid-cols-1 ">
              <div className="z-10">
                <h3 className="text-xl font-bold uppercase">today</h3>
                <div className="text-3xl my-12 max-md:text-2xl max-md:text-[20px]  max-sm:mr-[13rem] max-sm:my-10">
                  We're a distributed team of talented builders united and inspired by the impact of
                  our work.
                </div>
                <div className='hover:text-black w-[200px]'>
                  <Button>OUR TEAM</Button>
                </div>
              </div>
              { showImage && 
              <motion.div
                variants={Animations.image}
                className="absolute -z-0 -right-32 -top-40 max-lg:-right-24 lg:-right-40 md:-right-0 sm:right-0 max-sm:-right-6 max-sm:-top-10">
                <img src={america} />
              </motion.div> }
            </div>

            <div className="flex justify-between text-8xl pt-60 max-md:grid max-md:grid-cols-2 max-md:text-6xl max-md:pt-40">
              <div className="flex flex-col items-center z-0 max-sm:mb-14 font-numbers">
                <Counter from={0} to={9} />
                <span className="text-base mt-6 font-sans">Years in business</span>
              </div>
              <div className="flex flex-col items-center z-0 font-numbers">
                <Counter from={0} to={80} />
                <span className="text-base mt-6 font-sans">Builders</span>
              </div>
              <div className="flex flex-col items-center z-0 font-numbers">
                <Counter from={0} to={10} />
                <span className="text-base mt-6 font-sans">Countries</span>
              </div>
              <div className="flex flex-col items-center z-0 font-numbers">
                <Counter from={0} to={30} />
                <span className="text-base mt-6 font-sans">Partnerships</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Main>
  )
}

export default Home

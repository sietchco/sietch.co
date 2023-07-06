import { motion } from 'framer-motion'
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import img from '@/assets/img/image.png'
import america from '@/assets/svg/svg-america.svg'
import Wrapper from '@/components/common/Wrapper'
import Button from '@/components/ui/Button'
import Main from '@/layouts/Main'
import Counter from '@/utils/Counter'
import { Animations } from '@/variants/animations'

import Parallax from '../utils/Parallax'
import HomeProblem from '@/components/views/HomeProblem'

const Home = () => {
  const [showImage, setShowImage] = useState(false)

  return (
    <Main>
      <Helmet>
        <title>Sietch · Software Factory</title>
      </Helmet>

      <div className="bg-ui-white">
        {/* hero section */}
        <section className="bg-gradient-to-b from-[#D8E6F566] to-[#bbd0e63f] content-centered min-h-screen">
          <Wrapper>
            <div className="mb-8 mt-32 snap-center">
              <h3 className="text-2xl mb-4 max-sm:text-lg text-ui-gray">
                Sietch es un compañero digital.
              </h3>

              <h2 className="text-[56px] font-bold leading-[1.2] max-md:text-[33px] xl:w-[46rem]">
                Te ayudamos a alcanzar tus objetivos tecnológicos, <br /> tus metas son las
                nuestras.
              </h2>
            </div>

            <div className="mb-20">
              <Link to="/services">
                <Button>SERVICIOS</Button>
              </Link>
            </div>

            <div className="text-right">
              <p className="font-semibold max-sm:text-xl mb-2 text-2xl md:ml-72">
                “Sietch no es una agencia, siempre están buscando emprender, como nosotros, y eso es
                difícil de encontrar”
              </p>

              <p className="mb-2">
                —Alan Ramirez, Gerente General, <span className="link">ramirezlaw.com</span>
              </p>

              <span className="font-extrabold text-xl tracking-[-1px]">ramirezlaw.com</span>
            </div>
          </Wrapper>
        </section>

        {/* our story section*/}
        <section className="content-centered snap-center min-h-screen">
          <Wrapper>
            <div className="max-w-2xl">
              <h3 className="text-xl uppercase font-bold mb-9">SIETCH</h3>
              <ul className="list-disc mb-8">
                <li>
                  El sietch es nuestro hogar, una comunidad subterránea que nos protege de las
                  tormentas de arena del desierto.
                </li>
                <li>
                  Dentro del Sietch, los Fremen viven en estrecha comunidad, compartiendo recursos y
                  ayudándose mutuamente.
                </li>
                <li>
                  Los Fremen consideran que los Sietch son el corazón de su cultura y están
                  dispuestos a luchar y morir por ellos.
                </li>
              </ul>

              <strong className="text-xl">
                Estás son algunas definiciones de una Sietch, que nos ayudan a entender más porqué
                no nos consideramos una simple agencia.
              </strong>
            </div>
          </Wrapper>
        </section>

        {/* the problem section */}
        <HomeProblem />

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
        text-ui-black mt-[9rem] max-md:mt-24 grid sm:grid-cols-2 max-md:pt-10 max-md:pb-20 sm:gap-10 xl:gap-40 place-items-center snap-center"
        >
          <img src={img} />
          <div className="md:h-screen flex flex-col justify-center">
            <h3 className="text-xl uppercase font-bold mb-9 max-md:mt-10">we the action</h3>
            <div className="text-xl xl:leading-tight max-sm:pb-14 pb-20">
              Over 42,000 lawyers recruited to support more than 500 nonprofits nationwide.
            </div>
            <div>
              <Button>VIEW CASE STUDY</Button>
            </div>
          </div>
        </section>

        {/* today section with bg dark and numbers */}
        <section className="snap-center relative text-ui-white min-h-screen bg-today mb-[530px] max-md:mb-[340px]">
          <motion.div
            variants={Animations.bgdark}
            initial="hidden"
            animate="visible"
            onAnimationComplete={() => setShowImage(true)}
            className="absolute bg-black max-h-full w-full"
          ></motion.div>
          <Wrapper>
            <div className="max-w-2xl">
              <h3 className="text-xl font-bold uppercase mb-4">today</h3>

              <div className="text-3xl max-md:text-2xl max-md:text-[20px] mb-10">
                We're a distributed team of talented builders united and inspired by the impact of
                our work.
              </div>

              <div className="hover:text-black w-[200px]">
                <Button>OUR TEAM</Button>
              </div>
            </div>

            {showImage && (
              <motion.div
                variants={Animations.image}
                className="absolute w-1/2 -top-40 -bottom-40 right-0"
              >
                <img className="h-full" src={america} />
              </motion.div>
            )}

            <div className="flex justify-between text-8xl max-md:text-6xl w-1/2 absolute left-1/2 -translate-x-1/2 bottom-20">
              <div className="flex flex-col items-center z-0 max-sm:mb-14 font-numbers">
                <Counter from={0} to={5} />
                <span className="text-base mt-6 font-sans">Years in business</span>
              </div>
              <div className="flex flex-col items-center z-0 font-numbers">
                <Counter from={0} to={3} />
                <span className="text-base mt-6 font-sans">Apps</span>
              </div>
              <div className="flex flex-col items-center z-0 font-numbers">
                <Counter from={0} to={4} />
                <span className="text-base mt-6 font-sans">Partnerships</span>
              </div>
            </div>
          </Wrapper>
        </section>
      </div>
    </Main>
  )
}

export default Home

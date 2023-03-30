
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import img from '@/assets/img/image.png'

const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance])
}

const Parallax = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 600)

  return (
    <section className="flex relative h-screen justify-center items-center max-md:flex-col overflow-hidden snap-center">
      <div
        ref={ref}
        className="relative h-[400px] w-[400px] overflow-hidden max-h-[90vh] m-20 max-md:mb-[10rem] max-md:pt-[5rem] max-md:w-[350px]"
      >
        <img src={img} className="w-full h-full absolute " />
      </div>
      <motion.div
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1, transition: { duration: 1 } }}
        style={{ y }}
        className="ml-10 max-md:ml-0 md:left-[35vw]"
      >
        <h2 className="text-xl uppercase font-bold m-0">the problem</h2>
        <div className="text-2xl">Agencies have unstable teams and unexpected costs</div>
      </motion.div>
    </section>
  )
}

export default Parallax

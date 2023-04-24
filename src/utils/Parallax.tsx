import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import img from '@/assets/img/image.png'

const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance])
}

const Parallax = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 200)

  return (
    <section className="flex h-screen justify-center items-center max-md:flex-col overflow-hidden">
      <div
        ref={ref}
        className="m-20 max-md:m-0 max-md:pt-10"
      >
        <motion.img
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1, transition: { duration: 2.5 } }}
        src={img} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -50}}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        exit={{ opacity:0, y: 50}}
        style={{ y }}
        className="max-md:pt-32"
      >
        <h2 className="text-xl uppercase font-bold m-0">the problem</h2>
        <div className="text-2xl">Agencies have unstable teams and unexpected costs</div>
      </motion.div>
    </section>
  )
}

export default Parallax

import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import cs from '@/assets/img/cs.jpg'
import td from '@/assets/img/td.jpg'
import uc from '@/assets/img/u-c.jpg'

const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance])
}

const Parallax = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 300)

  return (
    <section>

      <div className="flex h-screen justify-center items-center max-md:flex-col overflow-hidden snap-center">
        <div ref={ref}>
          <img
            src={uc}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          style={{ y:0 }}
          className="md:ml-10 max-md:pt-20"
        >
          <h2 className="text-xl uppercase font-bold m-0">the problem</h2>
          <div className="text-2xl">Agencies have unstable teams and unexpected costs</div>
        </motion.div>
      </div>

      <div className="flex h-screen justify-center items-center max-md:flex-col overflow-hidden snap-center">
        <div ref={ref}>
          <img
            src={td}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          style={{ y:0 }}
          className="md:ml-10 max-md:pt-20"
        >
          <h2 className="text-xl uppercase font-bold m-0">the problem</h2>
          <div className="text-2xl">Agencies have unstable teams and unexpected costs</div>
        </motion.div>
      </div>

      <div className="flex h-screen justify-center items-center max-md:flex-col overflow-hidden snap-center max-md:gap-20 max-md:pt-24">
        <div ref={ref}>
          <img
            src={cs}
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
          style={{ y }}
          className="md:ml-10 max-md:pt-20"
        >
          <h2 className="text-xl uppercase font-bold m-0">the problem</h2>
          <div className="text-2xl">Agencies have unstable teams and unexpected costs</div>
        </motion.div>
      </div>
      
    </section>
  )
}

export default Parallax

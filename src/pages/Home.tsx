import { useEffect } from "react"

import Main from "@/layouts/Main"
import Button from "@/components/ui/Button"
import Counter from "@/utils/Counter"

import svg5 from '@/assets/svg/svgexport-5.svg'
import america from '@/assets/svg/svg-america.svg'
import img from '@/assets/img/case_study.png'

const Home = () => {

  useEffect(() => {
    document.title = "Sietch"
  }, [])

  return (
    <Main>
      <div className="bg-ui-white">
        <header className="bg-gradient-to-b from-[#D8E6F566] to-[#bbd0e63f] h-full ">
          <div className="container mx-auto py-10 text-ui-black max-sm:px-6 max-sm:py-0 lg:px-16 xl:px-64">
            <section className="pt-24 pb-[60px] max-sm:pb-11">
              <h3 className="text-2xl pb-4 max-sm:text-lg text-ui-gray">Sietch is a product strategy and development company.</h3>
              <h1 className="md:text-[56px] font-bold leading-[1.2] max-sm:text-[33px] max-sm:pt-5 xl:w-[46rem]">We help  innovators achieve successful outcomes.</h1>
            </section>
            <div className="-z-0">
              <Button>SERVICES</Button>
            </div>
            <div className="text-right max-sm:pt-16 pb-20 max-sm:pb-28">
              <p className="font-semibold max-sm:text-xl md:pt-32 text-2xl">&quot;Sietch is not an agency. They’re entrepreneurs like we are.&quot;</p>
              <p className="pt-4 pb-5">—Paul Díaz, President, <span className="link">Sietch</span></p>
              <span className="font-extrabold ml-5 text-xl tracking-[-1.5px]">Sietch</span>
            </div>
          </div>
        </header>

        {/* our story */}
        <section className="container mx-auto py-10 text-ui-black mt-[9rem] max-sm:mt-24 max-sm:px-6 max-sm:py-0 grid sm:grid-cols-2 lg:px-64">
          <div>
            <h3 className="text-xl uppercase font-bold mb-9">our story</h3>
            <div className="text-xl xl:text-[32px] xl:leading-tight">Able was founded in 2023 by Paul Díaz, a software engineer and entrepreneur, and Ericka Castillo, a venture investor, on the premise that
              <span className="font-bold ml-2">entrepreneurs and philanthropists need a better services model for building technology.</span>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-10 text-ui-black mt-[9rem] max-sm:mt-24 max-sm:px-6 max-sm:py-0 grid sm:grid-cols-2 lg:px-64 gap-10 mb-[12rem] xl:gap-40">  
          <div className="text-xl h-[32rem] xl:w-[32rem] flex items-center justify-center bg-gradient-to-b from-[#D8E6F566] to-[#F0F0F066] max-sm:mt-[9rem] max-sm:w-auto max-sm:h-[18rem] w-auto">
            <img src={svg5} />
          </div>
          <div className="flex flex-col justify-center max-sm:py-4">
            <h3 className="uppercase font-bold text-xl py-6">the problem</h3>
            <p className="text-3xl max-sm:text-xl">Agencies have unstable teams and unexpected costs</p>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#D8E6F566] to-[#bbd0e63f]">
          <div className="text-ui-black container mx-auto py-20 mt-[9rem] max-sm:mt-24 max-sm:px-6 lg:h-screen lg:w-screen md:flex md:flex-col md:justify-center">
          <h3 className="text-center text-2xl font-bold py-10">Sietch</h3>
          <h2 className="text-4xl text-center lg:text-6xl xl:mx-[20rem]">A new model to help ambitious innovators realize their vision</h2>
          <p className="text-center text-xl py-10 xl:mx-[28rem]">Our dedicated, startup caliber teams work hand-in-hand with our partners to deliver their business goals.</p>
          </div>
        </section>


        <section className="container mx-auto py-10 text-ui-black mt-[9rem] max-sm:mt-24 max-sm:px-6 max-sm:py-0 grid sm:grid-cols-2 lg:px-64 max-sm:pt-10 max-sm:pb-20 sm:gap-10 xl:gap-40 place-items-center md:pb-[10rem]">
          <img src={img} className="" />
          <div className="">
            <h3 className="order-last text-xl uppercase font-bold mb-9 max-md:mt-10">we the action</h3>
            <div className="text-xl xl:leading-tight max-sm:pb-14 pb-20">Over 42,000 lawyers recruited to support more than 500 nonprofits nationwide.
            </div>
            <Button>VIEW CASE STUDY</Button>
          </div>
        </section>

        <section className="text-ui-white bg-today mb-[530px] max-md:mb-[340px]">
          <div className="container mx-auto py-40 max-sm:pb-28 lg:px-64 max-sm:px-6 xl:pt-64">
            <div className="grid grid-cols-2 place-items-center gap-72 relative max-md:gap-10 max-sm:grid-cols-1">
              <div className="z-10">
                <h3 className="text-xl font-bold uppercase">today</h3>
                <div className="text-3xl my-12 max-md:text-2xl max-sm:text-[20px] max-sm:mr-[5rem] max-sm:my-10">We&apos;re a distributed team of talented builders united and inspired by the impact of our work.</div>
                <Button>OUR TEAM</Button>
              </div>
              <div className="absolute -z-0 -right-32 -top-40 max-lg:-right-24 lg:-right-40 md:-right-0 sm:right-0 max-sm:-right-6 max-sm:-top-10">
                <img src={america} />
              </div>
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

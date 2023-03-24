import { Helmet } from 'react-helmet'

import img from '@/assets/img/case_study.png'
import family from '@/assets/img/case-study.png'
import codeable from '@/assets/img/codeable.jpeg'
import imac from '@/assets/img/imac.png'
import airtime from '@/assets/svg/airtime.svg'
import caring from '@/assets/svg/caring.svg'
import pici from '@/assets/svg/pici.svg'
import Button from '@/components/ui/Button'
import Main from '@/layouts/Main'
import Counter from '@/utils/Counter'

const Work = () => {
  return (
    <Main>
      <Helmet>
        <title>Our Work | Sietch</title>
      </Helmet>
      <div className="text-ui-black bg-white">
        {/* Our work section */}
        <section className="bg-gradient-to-b from-[#D8E6F566] to-[#bbd0e63f]">
          <div
            className="container mx-auto max-sm:px-6 md:px-14 lg:px-16 xl:px-64
        pt-16 pb-52 max-md:pt-3 max-md:pb-36"
          >
            <h3 className="text-center text-xl font-bold py-10">OUR WORK</h3>
            <div className="">
              <p className="text-[2.5rem] font-bold max-md:text-3xl">
                "This partnership has led to a lot of positive change in the country over the past
                five years"
              </p>
              <p className="pt-10 text-xl max-md:text-[18px] max-sm:flex max-sm:flex-col">
                —Paul Díaz, Interim Executive Director,
                <span className="link ml-2 max-sm:ml-0 max-sm:w-[7.4rem]">We The Action</span>
              </p>
            </div>
          </div>
        </section>

        {/* Cards section */}
        <section
          className="container mx-auto max-sm:px-6 lg:px-16 xl:px-64
      grid md:grid-cols-2 my-56 items-center md:gap-20 lg:gap-32 max-md:my-28"
        >
          <img src={img} className="" />

          <div>
            <h3 className="order-last text-xl uppercase font-bold mb-9 max-md:mt-10">
              PROTECTING CIVIL RIGHTS
            </h3>
            <div className="text-xl xl:leading-tight">
              Since 2017, we've built and innovated a platform that has recruited over 42,000
              lawyers interested in advocating for a more equitable, inclusive, and just society.
            </div>
            <p className="font-bold text-xl my-10">Impact: $112M in pro bono legal work enabled</p>
            <Button>VIEW CASE STUDY</Button>
          </div>
        </section>

        <section
          className="container mx-auto max-sm:px-6 lg:px-16 xl:px-64
      grid md:grid-cols-2 my-56 items-center md:gap-20 lg:gap-32 max-md:my-28"
        >
          <div>
            <h3 className="order-last text-xl uppercase font-bold mb-9 max-md:mt-10">
              TAKING THE PAIN OUT OF MOVING
            </h3>
            <div className="text-xl xl:leading-tight">
              Updater is an invite-only moving app. We dramatically increased their conversions by
              launching native iOS and Android apps, and optimizing their onboarding flows.
            </div>
            <p className="font-bold text-xl my-10">
              Impact: 3x increase in TV and internet signup conversion rates
            </p>
            <Button>VIEW CASE STUDY</Button>
          </div>

          <img src={family} className="max-md:pt-14" />
        </section>

        <section
          className="container mx-auto max-sm:px-6 lg:px-16 xl:px-64
      grid md:grid-cols-2 my-56 items-center md:gap-20 lg:gap-32 max-md:my-28"
        >
          <img src={imac} />

          <div>
            <h3 className="order-last text-xl uppercase font-bold mb-9 max-md:mt-10">
              INNOVATING PUBLIC RADIO
            </h3>
            <div className="text-xl xl:leading-tight">
              We built a custom DJ playlist manager for a nonprofit radio station to improve
              internal workflows and deliver a better listener experience.
            </div>
            <p className="font-bold text-xl my-10">Impact: 75% reported workflow improvement</p>
            <Button>VIEW CASE STUDY</Button>
          </div>
        </section>

        {/* Partners section*/}
        <section className="bg-gradient-to-b from-[#D8E6F566] to-[#bbd0e63f]">
          <div
            className="container mx-auto max-sm:px-6 md:px-14 lg:px-16 xl:px-64
        pt-48 pb-52 max-md:pt-24 max-md:pb-36"
          >
            <div>
              <h3 className="text-center text-xl font-bold py-10 uppercase">OUR partners</h3>
              <p className="text-[2.3rem] text-center max-md:text-2xl">
                We pride ourselves on long team strategic relationships, and prefer to call our
                clients partners.
              </p>
            </div>

            <div className="grid grid-cols-3 item gap-10 text-center max-md:grid-cols-2 mt-72 max-md:mt-28">
              <div className="grid place-items-center place-content-start text-[1.2rem]">
                <img src={airtime} alt="airtime" className="h-16" />
                <span className="my-10 mx-8 max-md:hidden">
                  We've partnered with Airtime since 2019 to explore the possibilities of their
                  platform through software prototypes and strategic thinking.
                </span>
              </div>

              <div className="grid place-items-center text-[1.2rem]">
                <img src={pici} alt="pici" className="h-16" />
                <span className="my-10 mx-8 max-md:hidden">
                  PICIs Members Center was launched in 2017 to enhance collaboration amongst the
                  world's foremost researchers in cancer immunotherapy.
                </span>
              </div>

              <div className="grid place-items-center place-content-start text-[1.2rem] max-md:place-content-center">
                <img src={caring} alt="caring" className="h-16 max-md:mt-16 " />
                <span className="my-10 mx-8 max-md:hidden">
                  Caring.com and Sietch have partnered to completely reimagine the way people make
                  difficult senior care decisions.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* last section with dark bg */}
        <section className="text-ui-white bg-today mb-[530px] max-md:mb-[340px]">
          <div className="container mx-auto max-sm:px-6 lg:px-16 xl:px-64 pt-10">
            <div className="grid grid-cols-2 my-40 place-items-center md:gap-20 lg:gap-32 max-sm:grid-cols-1 max-md:my-14">
              <div className="max-md:text-center">
                <h3 className="text-xl font-bold uppercase">GETTING BETTER EVERYDAY</h3>
                <div className="text-[32px] mr-20 my-12 max-md:text-2xl max-sm:text-[20px] max-sm:mr-0 max-sm:my-6">
                  We're investing in our people, communities, and tools in a relentless quest to
                  improve.
                </div>
              </div>
              <div className="grid grid-cols-2 gap-40 max-md:gap-32 text-center">
                <div className="text-8xl grid place-items-center max-md:text-6xl font-numbers">
                  <Counter from={0} to={12} />
                  <span className="text-base mt-6 font-sans">Internal tools built</span>
                </div>

                <div className="text-8xl grid place-items-center max-md:text-6xl font-numbers">
                  <Counter from={0} to={8} />
                  <span className="text-base mt-6 font-sans">Product tested</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 place-items-center md:gap-20 lg:gap-26 max-sm:grid-cols-1 max-md:py-20 pb-52">
              <div>
                <h3 className="text-xl font-bold uppercase">EMBRACING A WORKFORCE IN LATAM</h3>
                <div className="text-xl my-12 max-md:text-2xl max-sm:text-[20px] max-sm:my-10 mr-14 max-sm:mr-0">
                  Our code school, Codeable, has graduated 8 cohorts of students (and counting!)
                  with a 95% job placement rate.
                </div>
                <Button>VISIT CODEABLE</Button>
              </div>
              <img src={codeable} className="max-md:pt-14" />
            </div>
          </div>
        </section>
      </div>
    </Main>
  )
}

export default Work

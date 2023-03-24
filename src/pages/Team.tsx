import { Helmet } from 'react-helmet'

import one2 from '@/assets/img/one2.jpeg'
import lunch from '@/assets/svg/lunch.svg'
import Main from '@/layouts/Main'
import Counter from '@/utils/Counter'

const Team = () => {
  return (
    <Main>
      <Helmet>
        <title>Our Team | Sietch</title>
      </Helmet>
      <div className="text-ui-black bg-white">
        {/* hero section our team */}
        <section className="bg-gradient-to-b from-[#D8E6F566] to-[#bbd0e63f]">
          <div
            className="container mx-auto max-sm:px-6 md:px-14 lg:px-16 xl:px-64
          pt-16 pb-52 max-md:pt-3 max-md:pb-36"
          >
            <h3 className="text-center text-xl font-bold py-10 uppercase">our team</h3>
            <div className="">
              <p className="text-[2.5rem] font-bold max-md:text-[1.5rem]">
                "Sietch believes that people are what make a company valuable. Both internally and
                with partners, we work with good people all around."
              </p>
              <p className="pt-10 text-xl max-md:text-[18px] max-sm:flex max-sm:flex-col">
                —Ericka Castillo, Senior Product Designer
              </p>
            </div>
          </div>
        </section>

        {/* Cards section with number counter */}
        <section className="container mx-auto max-sm:px-6 md:px-14 lg:px-16 xl:px-64 py-40 max-md:pt-28 max-md:pb-14">
          <h2 className="text-6xl text-center mb-36 max-md:text-3xl max-md:mb-24">
            Life at Sietch
          </h2>

          <div className="grid grid-cols-2 gap-32 place-items-center mb-36 max-md:grid-cols-1 max-md:gap-1 max-md:mb-24">
            <img src={one2} alt="" title="" decoding="async" />
            <div>
              <h3 className="text-xl font-bold my-10 max-md:text-xl">ONE SIETCH</h3>
              <div className="text-3xl max-md:text-xl">
                Our team members are distributed across North and South America, but we're not a
                U.S. team with near-shore engineering. We're one flat, integrated team of product
                professionals in 10 countries.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-32 text-center text-ui-gray max-md:grid-cols-1 max-md:gap-1">
            <div className="text-8xl max-md:text-6xl font-numbers">
              <Counter from={0} to={80} />
              <h3 className="text-base my-6 font-sans">Growth stage children in development</h3>
            </div>
            <div className="text-8xl max-md:text-6xl font-numbers">
              <Counter from={0} to={600} />
              <h3 className="text-base my-6 font-sans">Monopoly Deal games completed</h3>
            </div>
            <div className="text-8xl max-md:text-6xl font-numbers">
              <Counter from={0} to={100} />
              <h3 className="text-base my-6 font-sans">Debates about condiments</h3>
            </div>
          </div>
        </section>

        {/* Cards section and team skills */}
        <section
          className="container mx-auto max-sm:px-6 md:px-14 lg:px-16 xl:px-64
      grid grid-cols-2 gap-32 place-items-center max-md:grid-cols-1 max-md:gap-2"
        >
          <div>
            <h3 className="text-xl font-bold my-10 max-md:text-xl">TEAM</h3>
            <div className="text-3xl max-md:text-xl">
              We're a passionate and creative team that likes to work hard and have fun.
              <p className="my-10">
                If you’re an entrepreneur at heart who gets excited about social change, tinkering
                on side projects, and mingling with fellow builders, then we'd love to meet you.
              </p>
            </div>
          </div>
          <img src={one2} alt="" />
          <div>
            <h3 className="text-xl font-bold my-10 max-md:text-xl">PERKS</h3>
            <div className="text-3xl max-md:text-xl">
              We succeed when we create the conditions for our team to thrive. In addition to a
              competitive benefits package we also offer a number of perks:
            </div>
          </div>
        </section>

        <section className="container mx-auto max-sm:px-6 md:px-14 lg:px-16 xl:px-64 my-40 max-md:my-20">
          <div className="flex">
            <img src={lunch} alt="" className="mr-7" />
            <div className="text-xl">
              <h3 className="font-bold my-4">Remote first.</h3>
              <p>
                We have offices in Brooklyn, NY and Lima, Peru, but we encourage our team members to
                work where they are most comfortable and productive.
              </p>
            </div>
          </div>

          <div className="flex my-10 max-md:my-6">
            <img src={lunch} alt="" className="mr-7" />
            <div className="text-xl">
              <h3 className="font-bold my-4">No timesheets.</h3>
              <p>WWe’ve yet to meet someone who misses them.</p>
            </div>
          </div>

          <div className="flex">
            <img src={lunch} alt="" className="mr-7" />
            <div className="text-xl">
              <h3 className="font-bold my-4">Employee development and lunch stipends.</h3>
              <p>
                Monthly stipends to support personal development and health… oh, and to eat mid-day.
              </p>
            </div>
          </div>
        </section>

        {/* Join us section */}
        <section className="bg-gradient-to-b from-[#D8E6F566] to-[#bbd0e63f]">
          <div className="container mx-auto max-sm:px-6 md:px-14 lg:px-16 xl:px-64 py-52 max-md:py-32">
            <h3 className="text-center text-5xl mb-40 max-md:mb-36 max-md:text-4xl">Join us!</h3>

            <div className="grid grid-cols-2 gap-10 text-xl max-md:grid-cols-1">
              <div>
                <h3 className="uppercase font-bold mb-10">open roles:</h3>
                <div>
                  <p className="mb-5">
                    <span className="link">Director of Engineering (LatAm)</span>
                  </p>
                  <p className="mb-5">
                    <span className="link">Join us at Sietch - General Applications</span>
                  </p>
                  <p className="mb-5">
                    <span className="link">Managing Director, Product Strategy (US)</span>
                  </p>
                  <p className="mb-5">
                    <span className="link">Program Manager (US)</span>
                  </p>
                  <p className="mb-5">
                    <span className="link">Staff Software Engineer, JS</span>
                  </p>
                </div>
              </div>
              <div>
                <div className="text-2xl font-semibold leading-10 max-md:text-xl max-md:leading-8">
                  "Working at Sietch has allowed me to grow a lot professionally. I've learned new
                  stuff and accepted interesting challenges while helping our team build great
                  productos. But the people at Sietch, with their incredible support and trust, have
                  helped me grow as a person."
                  <p className="pt-5 font-normal text-[16px] max-md:text-right">
                    —Ericka Castillo, Senior Product Designer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership section with dark bg */}
        <section className="bg-today text-ui-white mb-[530px] max-md:mb-[340px]">
          <div className="container mx-auto max-sm:px-6 md:px-14 lg:px-16 xl:px-64 py-40 max-md:py-20">
            <h3 className="text-xl font-bold my-10 max-md:text-center max-md:my-8">LEADERSHIP</h3>
            <div className="text-[32px] mr-80 max-md:text-center max-md:mr-0 max-md:text-[21px]">
              Like the broader organization, our leadership team is distributed across North and
              South America. The team’s diverse backgrounds and expertise are unified by one
              characteristic: an ambition to build together.
            </div>
            <div className="grid grid-cols-4 gap-28 mt-28 max-md:grid-cols-2 max-md:gap-16 max-md:mt-24">
              <div>
                <img src={one2} />
                <h3 className="mt-8 mb-2 font-bold">Mike Potter</h3>
                <span>Founder</span>
              </div>
              <div>
                <img src={one2} />
                <h3 className="mt-8 mb-2 font-bold">Mike Potter</h3>
                <span>Founder</span>
              </div>
              <div>
                <img src={one2} />
                <h3 className="mt-8 mb-2 font-bold">Mike Potter</h3>
                <span>Founder</span>
              </div>
              <div>
                <img src={one2} />
                <h3 className="mt-8 mb-2 font-bold">Mike Potter</h3>
                <span>Founder</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Main>
  )
}

export default Team

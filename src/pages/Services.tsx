import { useEffect } from "react"
import Main from "@/layouts/Main"

import img from '@/assets/svg/pici.svg'

const Services = () => {
  useEffect(() => {
    document.title = "Our Services | Sietch"
  }, [])

  return(
  <Main>
    <div className="text-ui-black bg-white">
      <section className="bg-gradient-to-b from-[#D8E6F566] to-[#bbd0e63f]">
        <div className="container mx-auto max-sm:px-6 md:px-14 lg:px-16 xl:px-64
          pt-48 pb-52 max-md:pt-24 max-md:pb-36">
        <h3 className="text-center text-xl font-bold py-10 uppercase">services</h3>
          <div className="">
            <p className="text-[2.5rem] font-bold max-md:text-[1.5rem]">
            &quot;Sietch team build the first version of our product wich led to our Series A&quot;
            </p>
            <p className="pt-10 text-xl max-md:text-[18px] max-sm:flex max-sm:flex-col">—Ericka Castillo, Co-founder, Screening Room & CEO,<span className="link ml-2 max-sm:ml-0 max-sm:w-[4.1rem]">Weta FX</span></p>
          </div>
        </div>
      </section>

        <section className="container mx-auto py-10 text-ui-black mt-[9rem] max-sm:mt-24 max-sm:px-6 max-sm:py-0 grid sm:grid-cols-2 lg:px-16 xl:px-64">
          <div>
            <h3 className="text-xl uppercase font-bold mb-9">our services</h3>
            <div className="text-xl xl:text-[32px] xl:leading-tight">There&apos;s no ego or one size fits all approach. We embrace ambiguity and flexibility as a necessary step toward delivering outcomes for you.
              <p className="my-14">We can help you:</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto max-sm:px-6 lg:px-16 xl:px-64
        grid grid-cols-3 gap-20 text-[18px] mt-16 mb-40 max-md:grid-cols-1">
          <div>
            <img src={img} alt="" className="my-5 max-md:my-0"/>
            <h3 className="font-bold my-7 max-md:mt-16">Launch your product</h3>
            <div>Our Product Teams will help you focus on the right priorities, ensure you build the right thing, and bring it to market faster.</div>
            <p className="my-7 max-md:mb-4">Select cases study:</p>
            <span className="link my-5">We The Action</span>
          </div>

          <div>
            <img src={img} alt="" className="my-5 max-md:my-16"/>
            <h3 className="font-bold my-7">Innovate your organization</h3>
            <div>We can help your product and company continually respond to rapidly evolving business and user needs.</div>
            <p className="my-7 max-md:mb-0">Case study coming soon.</p>
          </div>

          <div>
            <img src={img} alt="" className="my-5 max-md:my-16"/>
            <h3 className="font-bold my-7">Scale your engineering</h3>
            <div>Our full-stack managed engineering teams are capable of tackling your most critical software engineering projects.</div>
            <p className="my-7">Select cases study:</p>
            <span className="link my-5">Updater</span>
          </div>
        </section>

        <section className="bg-today text-ui-white mb-[530px] max-md:mb-[340px]">
          <div className="container mx-auto max-sm:px-6 lg:px-16 xl:px-64 py-48 max-md:py-16">
            <div>
              <h3 className="text-xl font-bold py-10">CAPABILITIES</h3>
              <div className="text-3xl max-md:text-xl">Our talented team members draw from a wealth of backgrounds and experiences. These are some of our most commonly used skills:</div>
            </div>

            <div className="grid grid-cols-3 mt-40 gap-32 max-md:grid-cols-1 max-md:mt-14 max-md:gap-14">
              <div>
                <h3 className="text-xl font-bold mb-10">Product Management and Strategy</h3>
                <ul className="text-[18px] leading-8 list-disc max-md:mx-5">
                  <li>Product strategy</li>
                  <li>Roadmap development</li>
                  <li>Program and project management</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-10">Design</h3>
                <ul className="text-[18px] leading-8 list-disc max-md:mx-5">
                  <li>User research and testing</li>
                  <li>User experience design</li>
                  <li>Information architecture</li>
                  <li>Interaction design</li>
                  <li>Visual design</li>
                  <li>Rapid prototyping</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-10">Engineering</h3>
                <ul className="text-[18px] leading-8 list-disc max-md:mx-5">
                  <li>Technical strategy and architecture</li>
                  <li>Full-stack web and mobile development</li>
                  <li>DevOps</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    </div>
  </Main>
  )
}

export default Services

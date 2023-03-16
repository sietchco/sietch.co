import Button from "@/components/ui/Button"
import Main from "@/layouts/Main"

const Home = () => {
  return (
    <Main>
      <header className="bg-gradient-to-b from-[#D8E6F566] to-[#bbd0e63f] h-full">
        <div className="container mx-auto py-10 text-ui-black max-sm:px-6 max-sm:py-0 lg:px-64">
          <div className="pt-24 pb-[60px] max-sm:pb-11">
            <h3 className="text-2xl pb-4 max-sm:text-lg text-ui-gray">Sietch is a product strategy and development company.</h3>
            <h1 className=" md:text-[56px] font-bold leading-[1.2] max-sm:text-[33px] max-sm:pt-5 xl:w-[46rem]">We help  innovators achieve successful outcomes.</h1>
          </div>
          <div className="-z-0">
            <Button />
          </div>
          <div className="text-right max-sm:pt-16 pb-20 max-sm:pb-28">
            <p className="font-semibold max-sm:text-xl md:pt-32 text-2xl">“Sietch is not an agency. They’re entrepreneurs like we are.”</p>
            <p className="pt-4 pb-5">—Paul Díaz, President, <span className="link">Sietch</span></p>
            <span className="font-extrabold ml-5 text-xl tracking-[-1.5px]">Sietch</span>
          </div>
        </div>
      </header>

      {/* our story */}
      <section className="container mx-auto py-10 text-ui-black mt-[9rem] max-sm:px-6 max-sm:py-0 grid sm:grid-cols-2 lg:px-64">
        <div>
          <h3 className="text-xl uppercase font-bold mb-9">our story</h3>
          <div className="text-xl xl:text-[32px] xl:leading-tight">Able was founded in 2023 by Paul Díaz, a software engineer and entrepreneur, and Ericka Castillo, a venture investor, on the premise that
            <span className="font-bold ml-2">entrepreneurs and philanthropists need a better services model for building technology.</span>
          </div>
        </div>
      </section>
    </Main>
  )  
}

export default Home

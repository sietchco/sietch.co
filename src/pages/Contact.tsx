import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'

import Main from '@/layouts/Main'

const Contact = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      emailFrom: '',
      emailTo: 'partnerships@sietch.co',
      typeService: '',
      comesFrom: '',
      message: '',
    },
  })

  const onSubmit = (data: object) => {
    console.log(data)
  }

  return (
    <Main>
      <Helmet>
        <title>Contact | Sietch</title>
      </Helmet>
      <section className="bg-gradient-to-b from-[#D8E6F566] to-[#bbd0e63f] bg-white">
        <div className="container mx-auto max-sm:px-6 md:px-14 lg:px-16 xl:px-64 pt-14 pb-28 max-md:pt-0 max-md:pb-[4rem]">
          <h3 className="text-xl font-bold uppercase text-center snap-center">contact</h3>
          <h2 className="text-6xl text-center my-20 max-md:text-4xl">Let's build together</h2>

          <div className="bg-ui-white h-[570px] md:w-[700px] mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-16 max-md:p-8">
              <div className="text-gray-400 pb-9 max-md:pb-5">
                <label>From</label>
                <input
                  required
                  placeholder="Your Name"
                  className="ml-10 pl-2 w-24 bg-zinc-100 max-md:ml-3"
                  type="text"
                  {...register('name', {
                    required: true,
                  })}
                />

                <input
                  required
                  placeholder="<your@email.com>"
                  className="bg-zinc-100 mt-2 mx-2 w-40"
                  type="email"
                  {...register('emailFrom', {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                  })}
                />
              </div>

              <div className="text-gray-400 pb-9 max-md:pb-5">
                <label>To</label>
                <input
                  required
                  disabled
                  className="ml-6 bg-transparent text-ui-black"
                  type="email"
                  {...register('emailTo', {
                    required: true,
                  })}
                />
              </div>

              <h3 className="pb-5">Hey there Sietch,</h3>

              <div className="pb-5">
                <label>I’m looking to build</label>
                <select
                  required
                  className="ml-1 bg-zinc-100"
                  {...register('typeService', {
                    required: true,
                  })}
                >
                  <option value="new product">a new product.</option>
                  <option value="app">an app.</option>
                  <option value="website">a website.</option>
                </select>
              </div>

              <div className="pb-5">
                <label>I originally heard about you from</label>
                <select
                  required
                  className="ml-1 bg-zinc-100 my-2"
                  {...register('comesFrom', {
                    required: true,
                  })}
                >
                  <option value="internet">the internet.</option>
                  <option value="Sietch partner">a Sietch partner.</option>
                  <option value="can't remember">hmm, can't remember.</option>
                </select>
              </div>

              <h3 className="pb-4">Here’s a bit more context on what I’m trying to accomplish:</h3>

              <div className="pb-4">
                <textarea
                  required
                  className="bg-zinc-100 w-full"
                  cols={20}
                  rows={3}
                  {...register('message', {
                    required: true,
                  })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="h-16 w-28 border border-solid border-black font-semibold button"
              >
                SEND
              </button>
            </form>
          </div>

          <div className="text-base text-center mt-32 max-md:mt-[5rem]">
            <span className="mr-10 font-bold text-xl tracking-[-1px]">Sietch</span>
            <span className="mr-10 cursor-pointer link">Linkedin</span>
            <span className="">© 2023</span>
          </div>
        </div>
      </section>
    </Main>
  )
}

export default Contact

import { useEffect, useState } from "react"

import Main from "@/layouts/Main"

const Contact = () => {
  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ emailSt, setEmailSt ] = useState("")
  const [ service, setService ] = useState("")
  const [ by, setBy ] = useState("")
  const [ message, setMessage ] = useState("")

  const handleSubmit = (e) => {
    
    e.preventDefault()
    alert("enviado")
  }

  useEffect(() => {
    document.title = "Contact | Sietch"
  }, [])
  
  return(
    <Main>
    <section className="bg-gradient-to-b from-[#D8E6F566] to-[#bbd0e63f] bg-white">
      <div className="container mx-auto max-sm:px-6 md:px-14 lg:px-16 xl:px-64 pt-14 pb-28 max-md:pt-0 max-md:pb-[4rem]">
        <h3 className="text-xl font-bold uppercase text-center">contact</h3>
        <h2 className="text-6xl text-center my-20 max-md:text-4xl">Let&apos;s build together</h2>

        <div className="bg-ui-white h-[570px] md:w-[700px] mx-auto">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col p-16 max-md:p-8">
            <label  className="text-gray-400 pb-9 max-md:pb-5">From
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
                placeholder="Your Name"
                className="ml-10 pl-2 w-24 bg-zinc-100 max-md:ml-3" />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                required
                placeholder="<your@email.com>"
                className="bg-zinc-100 mt-2 mx-2 w-40" />
            </label>
            <label htmlFor="" className="text-gray-400 pb-9 max-md:pb-5">To
              <input
                onChange={(e) => setEmailSt(e.target.value)}
                type="email"
                defaultValue="sietch@sietch.co"
                disabled
                className="ml-6 bg-transparent text-ui-black" />
            </label>

            <p className="pb-5">Hey there Sietch,</p>

            <label className="pb-5">I&apos;m looking to build
              <select
                onChange={(e) => setService(e.target.value)}
                value={service}
                className="ml-1 bg-zinc-100">
                <option value="a new product">a new product.</option>
                <option value="an app">an app.</option>
                <option value="a website">a website.</option>
              </select>
            </label>

            <label className="pb-5">I originally heard about you from
              <select
                onChange={(e) => setBy(e.target.value)}
                value={by}
                className="ml-1 bg-zinc-100 my-2">
                <option value="the Internet">the Internet.</option>
                <option value="a Sietch partner">a Sietch partner.</option>
                <option value="hmm, can't remember">hmm, can&apos;t remember.</option>
              </select>
            </label>

            <p className="pb-4">Here’s a bit more context on what I’m trying to accomplish:</p>

            <label htmlFor="" className="pb-4">
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
                cols={20}
                rows={3}
                className="bg-zinc-100  w-full"></textarea>
            </label>
            <button className="h-16 w-28 border border-solid border-black font-semibold" type="submit">SEND</button>
          </form>
        </div>

        <div className='text-base text-center mt-32 max-md:mt-[5rem]'>
          <span className='mr-10 font-bold text-xl tracking-[-1px]'>Sietch</span>
          <span className='mr-10 cursor-pointer link'>Linkedin</span>
          <span className=''>© 2023</span>
        </div>
      </div>
    </section>
    </Main>
  )
}

export default Contact

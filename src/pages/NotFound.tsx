import { Helmet } from 'react-helmet'

import Main from '@/layouts/Main'

const NotFound = () => {
  return (
    <Main>
      <Helmet>
        <title>404 | Page not found</title>
      </Helmet>
      <div className='bg-[#EEF3F6] snap-end'>
        <section className='text-center pt-[35vh] h-[85vh] font-semibold mb-[530px] max-md:mb-[340px] text-xl'>
          <p>404 | This page could not be found.</p>
        </section>
      </div>
    </Main>
  )
}

export default NotFound

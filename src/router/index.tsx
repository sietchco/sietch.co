import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Contact from '@/pages/Contact'
import Home from '@/pages/Home'
import Services from '@/pages/Services'
import Work from '@/pages/Work'

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/work',
    element: <Work />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
])

const Router = () => <RouterProvider router={browserRouter} />

export default Router

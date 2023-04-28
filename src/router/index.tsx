import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Contact from '@/pages/Contact'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import Services from '@/pages/Services'
import Team from '@/pages/Team'
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
    path: '/team',
    element: <Team />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

const Router = () => <RouterProvider router={browserRouter} />

export default Router

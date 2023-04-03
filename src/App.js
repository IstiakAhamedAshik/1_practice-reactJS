import Home from './COMPONENTS/Home'
import First from './COMPONENTS/First'
import From from './COMPONENTS/From'
import Toggle from './COMPONENTS/Toggle'
import Header from './COMPONENTS/Header'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header></Header>,
      children: [
        {
          path: '/',
          element: <First></First>,
        },
        {
          path: '/home',
          element: <Home></Home>,
        },
        {
          path: '/form',
          element: <From></From>,
        },
        {
          path: '/toggle',
          element: <Toggle></Toggle>,
        },
      ],
    },
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App

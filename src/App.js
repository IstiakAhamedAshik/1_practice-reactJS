import Home from './COMPONENTS/Home'
import First from './COMPONENTS/First'
import From from './COMPONENTS/From'
import Toggle from './COMPONENTS/Toggle'
import Header from './COMPONENTS/Header'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import FriendsDetails from './COMPONENTS/FriendsDetails'

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
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Home></Home>,
        },
        {
          path: '/friend/:friendId',
          loader: async ({ params }) => {
            return fetch(
              `https://jsonplaceholder.typicode.com/users/${params.friendId}`
            )
          },
          element: <FriendsDetails></FriendsDetails>,
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

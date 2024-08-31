import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from "./Login"
import Browse from './Browse'

const Body = () => {
 
   const appRouter = createBrowserRouter(
      [
        {
        path: "/",
        element: <Login />
        },
        {
          path: "/browser",
          element: <Browse/>
        }
      ] 
  );
  

  return (
    <div className='w-auto'>
    <RouterProvider router={appRouter}>
      
    </RouterProvider>
  </div>
  )
}

export default Body
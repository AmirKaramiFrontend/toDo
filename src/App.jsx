import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotExistPage from "./pages/NotExistPage"
import AppLayout from "./ui/AppLayout"
import GlobalStyled from "./styles/GlobalStyles"


const App = function(){

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <NotExistPage />,
      children:[
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'register',
          element: <Register />
        },
        {
          path: '*',
          element: <NotExistPage />
        }
      ]
    }
   
  ])


  return <>
  <GlobalStyled />
  <RouterProvider router={router} />
  </>
}



export default App

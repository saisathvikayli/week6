import { createBrowserRouter,RouterProvider,Navigate } from "react-router"

import Home from "./components/Home"


function App() {
  const routerObj=createBrowserRouter([
    {
      path:"/",
      element:<Home />,
    }
  ])
  return (
    <RouterProvider router={routerObj}/>
  )
}

export default App
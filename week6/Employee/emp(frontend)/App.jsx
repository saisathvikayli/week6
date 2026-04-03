import { createBrowserRouter, RouterProvider } from "react-router";
import Rootlayout from "./components/Rootlayout";
import Home from "./components/Home";
import CreateEmp from "./components/CreateEmp";
import List from "./components/List";
import Employee from "./components/Employee";
import EditEmployee from "./components/EditEmployee";
import ContextProvider from "./context/contextprovider";

function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <Rootlayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "create-emp", element: <CreateEmp /> },
        { path: "list", element: <List /> },
        { path: "employee",   element: <Employee/> },
         { path: "edit-emp",   element: <EditEmployee /> },
      ],
    },
  ]);

  return  <ContextProvider>                            
      <RouterProvider router={routerObj} />
    </ContextProvider>
}

export default App;
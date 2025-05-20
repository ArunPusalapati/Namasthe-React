
import ReactDOM from "react-dom/client" 
import Header from "./components/Header"
import Body from "./components/Body"
import {createBrowserRouter} from "react-router"
import About from "./components/About"
import {RouterProvider} from "react-router"
import Contact from"./components/Contact"
import Error from "./components/Error"
import {Outlet} from "react-router"
import RestMenu from "./components/RestMenu"


const AppLayout=()=>{
    return (
    <div>
     <Header/>
     <Outlet/>
    </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<Error />,
      children:[
        {
        path:"/about",
        element:<About />
    },{
        path:"/contact",
        element:<Contact />
    },
    {
        path:"/",
        element:<Body />
    },
    {
        path:"/restaurants/:id",
        element:<RestMenu />
    }

      ]
      

    }
    
])
root.render(<RouterProvider router={appRouter} />);

import ReactDOM from "react-dom/client" 
import Header from "./components/Header"
import Body from "./components/Body"
import {createBrowserRouter} from "react-router"
import About from "./components/About"
import {RouterProvider} from "react-router"
import ContactUS from "./components/ContactUS"
import Error from "./components/Error"
import {Outlet} from "react-router"
import RestMenu from "./components/RestMenu"
import { lazy, Suspense ,useEffect,useState} from "react"
import UserContext from "./utils/UserContext"


const AppLayout=()=>{
    const [userName,setUserName]=useState()
    useEffect(()=>{
        
        const data={
            name:"ArunKumar"
        };
        setUserName(data.name)
    },[])
    return (
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className=" bg-gray-300">
     <Header/>
     <Outlet/>
    </div>
    </UserContext.Provider>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

const Grocery=lazy(()=>import("./components/Grocery"))
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
        element:<ContactUS />
    },
    {
        path:"/",
        element:<Body />
    },
    {
        path:"/grocery",
        element:<Suspense><Grocery/></Suspense>

    },
    {
        path:"/restaurants/:resid",
        element:<RestMenu />
    }

      ]
      

    }
    
])
root.render(<RouterProvider router={appRouter} />);
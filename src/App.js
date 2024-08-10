import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body"    
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurtantMenu";
// import Grocery from "./components/Grocery";
import { lazy } from "react";
import Footer from "./components/Footer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import CartDetails from "./components/CartDetails";

const Grocery = lazy(()=> import('./components/Grocery'))
const Applayout=()=>{
    //Authentication

    const [userName,setUserName] = useState();
    //Fetch Authenticatio API

    useEffect(()=>{
        //Make an API call and send the username and Password
        const data = {
            name:"Deependra singh"
        }
        setUserName(data.name);
    },[])

    return  ( 
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userName,setUserName}}>   
            <div className="app">
                <Header/>                
                <Outlet/>    
            </div>
            </UserContext.Provider>
            </Provider>
            
        
) }

const appRouter= createBrowserRouter([
    {
        path: '/',
        element:<Applayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:'/about',
                element:<About name={"This is Namaste React Series!!!"}/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/grocery',
                element:<Suspense fallback={<h2>Loading...</h2>}><Grocery/></Suspense>
            },
            {
                path:'/restaurtants/:resId',
                element:<RestaurantMenu/>
            },
            {
                path:'/cart',
                element: <CartDetails/>
            }
        ],
        errorElement:<Error/>
    }, 
    
])

    const root= ReactDOM.createRoot(document.getElementById("myRoot"));

    root.render(<RouterProvider router={appRouter} />)

    // console.log("parent",Header)

    /**
 * header
 *  -Logo
 *  -Nav item
 * Body
 *  -search
 *  -Resturtant container
 *      -Resturtant Cards
 *          -image
 *          -Resturtant Name
 *          -Dish name         
 *          -Rating
 *          -Cusinis
 *          -Time to Deliver
 * Footer
 *  -Copyright
 *  -liks
 *  -Address
 *  -Contact
 */
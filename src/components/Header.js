import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js"
import UserContext from "../utils/UserContext.js"
import { useContext } from "react";
import { useSelector } from "react-redux";

 const Header = () => {
    // const [btn,setBtn] =useState('Login')
    const [btnNameReact,setBtnNameReact] = useState( "Login")
    const onlineStatus = useOnlineStatus();
    const {loggedInUser}=useContext(UserContext)

    //Subscribing to the store using a Selector

    const cartItems =useSelector((store)=>{ return store.cart.items});
    console.log(cartItems)
    return(
    <div className="flex justify-between bg-pink-100 m-2 shadow-2xl text-xl lg:bg-green-100
     md:bg-slate-300 sm:bg-pink-300">
        <div className="logo_container">
            < img className="h-48 w-full object-cover md:h-full md:w-48 rounded" src={LOGO_URL} />
        </div>

        <div className="flex items-center" >
            <ul className="flex p-4 m-4 flex-wrap "> 
                <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴" } </li>
                <li className="px-4"><Link to={'/'}>Home</Link></li>
                <li className="px-4"><Link to={'/about'}> About Us</Link></li>  
                <li className="px-4"><Link to={'/contact'}>Contact Us</Link></li>         
                <li className="px-4"><Link to={'/grocery'}> Grocery</Link></li>
                <li className="px-4 font-bold text-xl"><Link to={'/cart'}> Cart ({cartItems.length} items)</Link></li>
                <button className="login" 
                    onClick={()=>{btnNameReact === 'Login'? setBtnNameReact("Logout") : setBtnNameReact("Login") }} >
                    {btnNameReact}
                </button>
                <li className="font-bold px-4">{loggedInUser}</li>


            </ul>
        </div>
    </div>
)}

export default Header
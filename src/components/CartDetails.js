import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList"
import { clearItems } from "../utils/cartSlice";

const CartDetails = () =>{
    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems)
    const dispatch =useDispatch()
    const handleClearCart =() =>{
        dispatch(clearItems())

    }
    return(
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-5xl">
                Cart Details
            </h1>

            <div className="w-6/12  m-auto">
            <button className="bg-blue-700 text-white p-2 m-2 rounded-lg" onClick={handleClearCart} >Clear Cart</button>
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default CartDetails;
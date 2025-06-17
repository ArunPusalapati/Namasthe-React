import { useDispatch, useSelector } from "react-redux";
import ItemCards from "./ItemCards";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const cart=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch();
    return (
        <div className="w-6/12 m-auto bg-white rounded p-2">
            <button
            className="bg-black text-white p-2 rounded ml-160"
            onClick={
                ()=>dispatch(clearCart())
            }
            >
            clear Cart
            </button>
            <ItemCards itemCards={cart}/>
            
        </div>
    );
}

export default Cart;
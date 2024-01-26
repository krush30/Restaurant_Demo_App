import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearItems } from "../utils/cartSlice";

const Cart = () => {

    const cartItem = useSelector((store) => store.cart.items);

    const dispatchs = useDispatch();

    const handleClearCart = () => {
        dispatchs(clearItems());
    };
    return (
        <div>
            <h2>Cart</h2>
            <button className=" text-white bg-black rounded-lg"
                onClick={handleClearCart}>
                clearCart</button>
            <ItemList items={cartItem} ></ItemList>
        </div>
    )
}

export default Cart;
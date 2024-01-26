import { useDispatch } from "react-redux";
import { MENU_URL } from "../utils/content";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items }) => {

    const dispatch = useDispatch();

    const handAddItem = (item) => {
        dispatch(addItems(item))
    }
    return (
        <div>
            {items.map((item) =>
            (<div key={item.card.info.id} className="p-2 m-2  border-gray-400 border-b-2 text-left flex justify-between">


                <div className="w-9/12"><div className=" py-3 p-4 font-semibold">
                    <span >{item.card.info.name}</span>
                    - ₹
                    <span>{item.card.info.price / 100}</span>
                </div>
                    <div className="text-xs p-4">
                        {item.card.info.description}
                    </div>
                </div>
                <div className="w-3/12 p-4" >
                    <button className="p-1 bg-black text-white mx-16 rounded-lg shadow-lg absolute "
                        onClick={() => handAddItem(item)}>
                        Add +</button>
                    <img src={MENU_URL + item.card.info.imageId} className="w-10/12 h-auto " />
                </div>

            </div>
            ))}

        </div>
    )
}

export default ItemList;

import { LOGO_URL } from "../utils/content";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {

    const [btnName, setbtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const { loggedInUSer } = useContext(UserContext);
    // console.log(data);

    const cartItem = useSelector((store) => store.cart.items);
    console.log(cartItem);
    return (



        <div className="flex justify-between shadow-md p-4">
            <div className="logo-container">
                <img className="w-56 shadow-md" src={LOGO_URL} />
            </div>
            <div className="flex items-center  ">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4" >Online status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact us</Link></li>
                    <li className="px-4"><Link to="/grocery"> Grocery</Link>  </li>
                    <li> <Link to="/Cart">Cart{cartItem.length} </Link></li>

                    <button
                        className="btn"
                        onClick={() => {

                            btnName === " Login" ? setbtnName(" Logout") :
                                setbtnName(" Login");
                        }}>
                        {btnName}
                    </button>
                    <li className="px-4">{loggedInUSer}</li>
                </ul>

            </div>
        </div>
    )
}

export default Header;
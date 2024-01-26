
import { CDN_URL } from "../utils/content";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestroCard = (props) => {
    const { resData } = props;
    const { loggedInUSer } = useContext(UserContext);

    return (
        <div className="m-4 p-4 w-[250px] shadow-lg hover:bg-slate-200 hover:rounded-lg" style={{}}>
            <img className="rounded-lg" src={CDN_URL + resData.info.cloudinaryImageId} />
            <h3 className="m-2 py-4 border-solid font-bold" >Name: {resData.info.name}</h3>
            <h4 className="m-2 py-2 font-semibold" >Cuisines: {resData.info.cuisines.join(" ,")}</h4>
            <h4 className="m-2 py-2 font-semibold" >Rating: {resData.info.avgRating}⭐</h4>
            <h4 className="m-2 py-2 font-semibold" >Delvert time: {resData.info.sla.slaString}</h4>
            <h4 className="m-2 py-2 font-semibold" >Name:{loggedInUSer}</h4>
        </div>
    )
}


export default RestroCard;


export const withPromotedLabel = (RestroCard) => {
    return (props) => {
        return (
            <div>
                <label className="m-2 p-2 rounded-lg  absolute bg-black text-white">Promoted</label>
                <RestroCard {...props} />
            </div>

        )
    }
}
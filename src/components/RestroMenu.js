import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";
import ResCategory from "./ResCategory";
import { useState } from "react";

const RestroMenu = () => {
    const { resID } = useParams();
    const [showIndex, setShowIndex] = useState();
    const resInfo = useRestroMenu(resID);

    if (resInfo === null) return <Shimmer></Shimmer>;

    const { name, avgRating, cuisines, }
        = resInfo?.cards[0]?.card?.card?.info;

    // const { itemCards }
    //     = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(itemCards, "itemCards");

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
            c.card?.["card"]?.["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"

    );

    return (
        <div className="text-center">
            <h1 className="font-bold  my-6 text-2xl " >{name}</h1>
            <p className="font-bold text-lg"> {cuisines.join(" , ")}
            </p>

            { }
            {categories.map((category, index) =>
            (<ResCategory
                key={category?.card?.card.title}
                data={category?.card?.card}
                accordionClicked={index == showIndex ? true : false}
                setShowIndex={() => { setShowIndex(index) }} />)

            )}

        </div>
    )
}

export default RestroMenu;
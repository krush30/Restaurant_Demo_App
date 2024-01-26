import RestroCard, { withPromotedLabel } from "./RestroCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {

    const [ListOfRestro, setListOfRestro] = useState([]);
    const [filterList2, setFilterList2] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1485289&lng=77.3191471&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        console.log(json);
        setListOfRestro(json.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilterList2(json.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }



    const RestroCardPromoted = withPromotedLabel(RestroCard);
    const { loggedInUSer, setNewName } = useContext(UserContext);

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) return (
        <h1>Nigga u poor</h1>
    )


    return ListOfRestro.length == 0 ? <Shimmer></Shimmer> : (
        <div className="body">
            <div className="flex">
                <div className="search m-4 p-4">
                    <input type="text" className="mx-4 py-2 px-4 border-solid border-black" placeholder="Enter something.."
                        value={searchText} onChange={(e) => {
                            setSearchText(e.target.value);

                        }} />

                    <button className="px-4 py-2 bg-green-400 mx-4 border-solid border-black rounded-lg"
                        onClick={() => {

                            console.log(searchText);

                            const filterList2 = ListOfRestro.filter((res) =>
                                res.info.name.includes(searchText)
                            );
                            setFilterList2(filterList2);
                        }}
                    >Search
                    </button>


                </div>
                <div className="search m-4 p-4 ">
                    <button className="px-4 py-2 bg-gray-400 mx-4 rounded-lg"
                        onClick={() => {
                            const filterList = ListOfRestro.filter(
                                (res) => res.info.avgRating > 4
                            );
                            setFilterList2(filterList);
                        }}>Top rated restro
                    </button>
                    <label>Username: </label>
                    <input className="border border-black"
                        value={loggedInUSer}
                        onChange={(e) => setNewName(e.target.value)} />
                </div>


            </div>
            <div className="flex flex-wrap hover:[w-50px]">
                {filterList2.map((restraunt) => (
                    <Link key={restraunt.info.id} to={"/restraunts/" + restraunt.info.id}>
                        {restraunt.info.avgRating > 4 ? <RestroCardPromoted resData={restraunt} /> : <RestroCard resData={restraunt}></RestroCard>}

                    </Link>



                ))}

            </div>
        </div>
    )
}


export default Body;
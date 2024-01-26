import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({ data, accordionClicked, setShowIndex }) => {
    // const [accordionClicked, setAccordionClicked] = useState(false);
    const handleClick = () => {
        setShowIndex();
    }
    return (
        <div>
            { }
            <div className="w-6/12 bg-gray-50 shadow-lg p-4 my-5 mx-auto ">

                <div className="flex justify-between cursor-pointer"
                    onClick={() => {
                        handleClick();


                    }}>
                    <span className="font-bold text-lg  ">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span>⬇️</span>
                </div>

                {accordionClicked && <ItemList items={data.itemCards}></ItemList>}
            </div>


        </div>
    );
};

export default ResCategory;
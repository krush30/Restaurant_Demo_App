import { useEffect, useState } from "react";
import { MENU_API } from "./content";

const useRestroMenu = (resID) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const data = await fetch(MENU_API + resID);
        const json = await data.json();
        console.log(resInfo, "resinfo")
        setResInfo(json.data);
    }
    return resInfo;
}

export default useRestroMenu;